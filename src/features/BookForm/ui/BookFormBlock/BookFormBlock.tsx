"use client";
import { clsx } from "@/shared/lib/clsx";
import { ChangeEvent, SubmitEvent, useState } from "react";

import { IBookFormData } from "../../types";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import PUBLIC_API from "@/shared/api/publicAPI";
import TourSelect from "../QuestionFormBlock/TourSelect/TourSelect";

const today = new Date();
const localDate = today.toLocaleDateString("en-CA");

function BookFormBlock() {
  const t = useTranslations("BookForm");

  const [submitLoading, setSubmitLoading] = useState(false);

  const [fullName, setFullName] = useState("");
  const [fullNameValidate, setFullNameValidate] = useState(false);

  const [tourId, setTourId] = useState("");
  const [tourIdValidate, setTourIdValidate] = useState(false);

  const [email, setEmail] = useState("");
  const [emailValidate, setEmailValidate] = useState(false);

  const [message, setMessage] = useState("");
  const [messageValidate, setMessageValidate] = useState(false);

  const [primaryPhone, setPrimaryPhone] = useState("");
  const [primaryPhoneValidate, setPrimaryPhoneValidate] = useState(false);

  const [secondaryPhone, setSecondaryPhone] = useState("");
  const [secondaryPhoneValidate, setSecondaryPhoneValidate] = useState(false);

  const [maxPeople, setMaxPeople] = useState("");
  const [maxPeopleValidate, setMaxPeopleValidate] = useState(false);

  const [startingDate, setStartingDate] = useState("");
  const [startingDateValidate, setStartingDateValidate] = useState(false);

  const [endingDate, setEndingDate] = useState("");
  const [endingDateValidate, setEndingDateValidate] = useState(false);

  const onChangeFullName = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setFullName(value);

    if (value) {
      setFullNameValidate(false);
    } else {
      setFullNameValidate(true);
    }
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setEmail(value);

    if (value) {
      setEmailValidate(false);
    } else {
      setEmailValidate(true);
    }
  };

  const onChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;

    setMessage(value);

    if (value) {
      setMessageValidate(false);
    } else {
      setMessageValidate(true);
    }
  };

  const onChangeTourId = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    console.log(value);
    setTourId(value);

    if (value) {
      setTourIdValidate(false);
    } else {
      setTourIdValidate(true);
    }
  };

  const onChangePrimaryPhone = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setPrimaryPhone(value);

    if (value) {
      setPrimaryPhoneValidate(false);
    } else {
      setPrimaryPhoneValidate(true);
    }
  };

  const onChangeSecondaryPhone = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSecondaryPhone(value);

    if (value) {
      setSecondaryPhoneValidate(false);
    } else {
      setSecondaryPhoneValidate(true);
    }
  };

  const onChangeMaxPeople = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setMaxPeople(value);

    if (value) {
      setMaxPeopleValidate(false);
    } else {
      setMaxPeopleValidate(true);
    }
  };

  const onChangeStartingDate = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setStartingDate(value);

    if (value) {
      setStartingDateValidate(false);
    } else {
      setStartingDateValidate(true);
    }
  };

  const onChangeEndingDate = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setEndingDate(value);

    if (value) {
      setEndingDateValidate(false);
    } else {
      setEndingDateValidate(true);
    }
  };

  const onPostBook = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !fullName &&
      !email &&
      !message &&
      !tourId &&
      !primaryPhone &&
      !secondaryPhone &&
      !+maxPeople &&
      !startingDate &&
      !endingDate
    ) {
      setFullNameValidate(true);
      setEmailValidate(true);
      setMessageValidate(true);
      setTourIdValidate(true);
      setPrimaryPhoneValidate(true);
      setSecondaryPhoneValidate(true);
      setMaxPeopleValidate(true);
      setStartingDateValidate(true);
      setEndingDateValidate(true);
      return;
    }

    if (!fullName) {
      setFullNameValidate(true);
      return;
    }

    if (!email) {
      setEmailValidate(true);
      return;
    }

    if (!message) {
      setMessageValidate(true);
      return;
    }

    if (!tourId) {
      setTourIdValidate(true);
      return;
    }

    if (!primaryPhone) {
      setPrimaryPhoneValidate(true);
      return;
    }

    if (!secondaryPhone) {
      setSecondaryPhoneValidate(true);
      return;
    }

    if (!+maxPeople) {
      setMaxPeopleValidate(true);
      return;
    }

    if (!startingDate) {
      setStartingDateValidate(true);
      return;
    }

    if (!endingDate) {
      setEndingDateValidate(true);
      return;
    }

    const dataBook = {
      tour_id: +tourId,
      full_name: fullName,
      email,
      message,
      max_people: +maxPeople,
      starting_date: startingDate,
      ending_date: endingDate,
      primary_phone: primaryPhone,
      secondary_phone: secondaryPhone,
    };

    try {
      setSubmitLoading(true);

      const res = await PUBLIC_API.post<IBookFormData>(
        "api/bookings",
        dataBook,
      );

      if (!res.data.success) {
        throw new Error("error");
      }

      toast.success(res.data.message);
    } catch (error) {
      toast.error(t("Something went wrong while sending"));
    } finally {
      setSubmitLoading(false);

      setFullName("");
      setEmail("");
      setMessage("");
      setTourId("");
      setPrimaryPhone("");
      setSecondaryPhone("");
      setMaxPeople("");
      setStartingDate("");
      setEndingDate("");
    }
  };

  return (
    <>
      <form onSubmit={onPostBook}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-15 mb-10 md:mb-15">
          <TourSelect
            tourId={tourId}
            onChangeTourId={onChangeTourId}
            tourIdValidate={tourIdValidate}
          />

          <div>
            <input
              type="text"
              placeholder={t("Full name")}
              className={clsx(["input input-md w-full"], {
                "input-error": fullNameValidate,
              })}
              value={fullName}
              onChange={onChangeFullName}
            />
            {fullNameValidate && (
              <div className="label mt-[2]">
                <span className="label-text-alt text-red-500">
                  {t("Fill in the field")}
                </span>
              </div>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              className={clsx(["input input-md w-full"], {
                "input-error": emailValidate,
              })}
              value={email}
              onChange={onChangeEmail}
            />
            {emailValidate && (
              <div className="label mt-[2]">
                <span className="label-text-alt text-red-500">
                  {t("Fill in the field")}
                </span>
              </div>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder={t("Phone")}
              className={clsx(["input input-md w-full"], {
                "input-error": primaryPhoneValidate,
              })}
              value={primaryPhone}
              onChange={onChangePrimaryPhone}
            />
            {primaryPhoneValidate && (
              <div className="label mt-[2]">
                <span className="label-text-alt text-red-500">
                  {t("Fill in the field")}
                </span>
              </div>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder={t("Additional phone")}
              className={clsx(["input input-md w-full"], {
                "input-error": secondaryPhoneValidate,
              })}
              value={secondaryPhone}
              onChange={onChangeSecondaryPhone}
            />
            {secondaryPhoneValidate && (
              <div className="label mt-[2]">
                <span className="label-text-alt text-red-500">
                  {t("Fill in the field")}
                </span>
              </div>
            )}
          </div>

          <div>
            <input
              type="number"
              placeholder={t("Number of people")}
              className={clsx(["input input-md w-full"], {
                "input-error": maxPeopleValidate,
              })}
              value={maxPeople}
              onChange={onChangeMaxPeople}
            />
            {maxPeopleValidate && (
              <div className="label mt-[2]">
                <span className="label-text-alt text-red-500">
                  {t("Fill in the field")}
                </span>
              </div>
            )}
          </div>

          <div>
            <label
              className="flex mb-5 text-description-small"
              htmlFor="start-date"
            >
              {t("Start date")}
            </label>
            <input
              id="start-date"
              type="date"
              className={clsx(["input input-md w-full"], {
                "input-error": startingDateValidate,
              })}
              value={startingDate}
              onChange={onChangeStartingDate}
              min={localDate}
            />
            {startingDateValidate && (
              <div className="label mt-[2]">
                <span className="label-text-alt text-red-500">
                  {t("Fill in the field")}
                </span>
              </div>
            )}
          </div>

          <div>
            <label
              className="flex mb-5 text-description-small"
              htmlFor="end-date"
            >
              {t("End date")}
            </label>
            <input
              id="end-date"
              type="date"
              className={clsx(["input input-md w-full"], {
                "input-error": endingDateValidate,
              })}
              value={endingDate}
              onChange={onChangeEndingDate}
              min={localDate}
            />
            {endingDateValidate && (
              <div className="label mt-[2]">
                <span className="label-text-alt text-red-500">
                  {t("Fill in the field")}
                </span>
              </div>
            )}
          </div>

          <div className="col-span-1 md:col-span-2">
            <textarea
              className={clsx(["textarea w-full"], {
                "textarea-error": messageValidate,
              })}
              placeholder={t("Comment")}
              value={message}
              onChange={onChangeMessage}
            />
            {messageValidate && (
              <div className="label">
                <span className="label-text-alt text-error">
                  {t("Fill in the field")}
                </span>
              </div>
            )}
          </div>
        </div>

        <button
          disabled={submitLoading}
          className="btn shadow-none border-none bg-primary-350 text-shadow-secondary-350"
        >
          {submitLoading ? t("Loading") : t("Send")}
        </button>
      </form>
    </>
  );
}

export default BookFormBlock;
