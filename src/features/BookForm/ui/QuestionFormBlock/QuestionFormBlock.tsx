"use client";
import { clsx } from "@/shared/lib/clsx";
import { ChangeEvent, SubmitEvent, useState } from "react";
import TourSelect from "./TourSelect/TourSelect";

function QuestionFormBlock() {
  const [fullName, setFullName] = useState("");
  const [fullNameValidate, setFullNameValidate] = useState(false);

  const [tourId, setTourId] = useState("");
  const [tourIdValidate, setTourIdValidate] = useState(false);

  const [email, setEmail] = useState("");
  const [emailValidate, setEmailValidate] = useState(false);

  const [phone, setPhone] = useState("");
  const [phoneValidate, setPhoneValidate] = useState(false);

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

  const onChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setPhone(value);

    if (value) {
      setPhoneValidate(false);
    } else {
      setPhoneValidate(true);
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
    console.log({
      tourId,
    });
  };

  return (
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
            placeholder="Полное имя"
            className={clsx(["input input-md w-full"], {
              "input-error": fullNameValidate,
            })}
            value={fullName}
            onChange={onChangeFullName}
          />
          {fullNameValidate && (
            <div className="label mt-[2]">
              <span className="label-text-alt text-red-500">
                Fill in the field
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
                Fill in the field
              </span>
            </div>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Телефон"
            className={clsx(["input input-md w-full"], {
              "input-error": phoneValidate,
            })}
            value={phone}
            onChange={onChangePhone}
          />
          {phoneValidate && (
            <div className="label mt-[2]">
              <span className="label-text-alt text-red-500">
                Fill in the field
              </span>
            </div>
          )}
        </div>

        <div className="col-span-1 md:col-span-2">
          <textarea
            className={clsx(["textarea w-full"], {
              "textarea-error": commentValidate,
            })}
            placeholder="Bio"
            value={comment}
            onChange={onChangeComment}
          />
          {commentValidate && (
            <div className="label">
              <span className="label-text-alt text-error">
                Fill in the field
              </span>
            </div>
          )}
        </div>
      </div>

      <button className="btn shadow-none border-none bg-primary-350 text-shadow-secondary-350">
        Отправить
      </button>
    </form>
  );
}

export default QuestionFormBlock;
