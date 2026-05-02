"use client";
import { clsx } from "@/shared/lib/clsx";
import { ChangeEvent, SubmitEvent, useState } from "react";
import TourSelect from "./TourSelect/TourSelect";
import { IBookFormData } from "../../types";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import PUBLIC_API from "@/shared/api/publicAPI";

function QuestionFormBlock() {
  const t = useTranslations("BookForm");

  const [submitLoading, setSubmitLoading] = useState(false);

  const [fullName, setFullName] = useState("");
  const [fullNameValidate, setFullNameValidate] = useState(false);

  const [tourId, setTourId] = useState("");
  const [tourIdValidate, setTourIdValidate] = useState(false);

  const [email, setEmail] = useState("");
  const [emailValidate, setEmailValidate] = useState(false);

  const [whatsappPhone, setWhatsappPhone] = useState("");
  const [whatsappPhoneValidate, setWhatsappPhoneValidate] = useState(false);

  const [region, setRegion] = useState("");
  const [regionValidate, setRegionValidate] = useState(false);

  const [comment, setComment] = useState("");
  const [commentValidate, setCommentValidate] = useState(false);

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

  const onChangeWhatsappPhone = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setWhatsappPhone(value);

    if (value) {
      setWhatsappPhoneValidate(false);
    } else {
      setWhatsappPhoneValidate(true);
    }
  };

  const onChangeRegion = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setRegion(value);

    if (value) {
      setRegionValidate(false);
    } else {
      setRegionValidate(true);
    }
  };

  const onChangeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;

    setComment(value);

    if (value) {
      setCommentValidate(false);
    } else {
      setCommentValidate(true);
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

  const onPostQuestion = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !fullName &&
      !email &&
      !whatsappPhone &&
      !comment &&
      !tourId &&
      !region
    ) {
      setFullNameValidate(true);
      setEmailValidate(true);
      setWhatsappPhoneValidate(true);
      setCommentValidate(true);
      setTourIdValidate(true);
      setRegionValidate(true);
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

    if (!whatsappPhone) {
      setWhatsappPhoneValidate(true);
      return;
    }

    if (!comment) {
      setCommentValidate(true);
      return;
    }

    if (!region) {
      setRegionValidate(true);
      return;
    }

    if (!tourId) {
      setTourIdValidate(true);
      return;
    }

    const dataQuestion = {
      tour_id: +tourId,
      full_name: fullName,
      email,
      whatsapp_phone: whatsappPhone,
      region,
      comment,
    };

    try {
      setSubmitLoading(true);

      const res = await PUBLIC_API.post<IBookFormData>(
        "api/questions",
        dataQuestion,
      );

      if (!res.data.success) {
        throw new Error(res.data.message);
      }

      toast.success(res.data.message);
    } catch (error) {
      toast.error(t("Something went wrong while sending"));
    } finally {
      setSubmitLoading(false);

      setFullName("");
      setEmail("");
      setWhatsappPhone("");
      setComment("");
      setRegion("");
      setTourId("");
    }
  };

  return (
    <>
      <form onSubmit={onPostQuestion}>
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
              placeholder={t("WhatsApp phone")}
              className={clsx(["input input-md w-full"], {
                "input-error": whatsappPhoneValidate,
              })}
              value={whatsappPhone}
              onChange={onChangeWhatsappPhone}
            />
            {whatsappPhoneValidate && (
              <div className="label mt-[2]">
                <span className="label-text-alt text-red-500">
                  {t("Fill in the field")}
                </span>
              </div>
            )}
          </div>

          <div className="col-span-1 md:col-span-2">
            <input
              type="text"
              placeholder={t("Region")}
              className={clsx(["input input-md w-full"], {
                "input-error": regionValidate,
              })}
              value={region}
              onChange={onChangeRegion}
            />
            {regionValidate && (
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
                "textarea-error": commentValidate,
              })}
              placeholder={t("Comment")}
              value={comment}
              onChange={onChangeComment}
            />
            {commentValidate && (
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

export default QuestionFormBlock;
