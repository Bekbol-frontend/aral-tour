"use client";

import { clsx } from "@/shared/lib/clsx";
import { RatingChange } from "@/shared/ui/RatingChange";
import { Title } from "@/shared/ui/Title";
import { ChangeEvent, useState } from "react";

function CatalogReviewForm() {
  const [name, setName] = useState("");
  const [nameValidate, setNameValidate] = useState(false);

  const [email, setEmail] = useState("");
  const [emailValidate, setEmailValidate] = useState(false);

  const [comment, setComment] = useState("");
  const [commentValidate, setCommentValidate] = useState(false);

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setName(value);

    if (value) {
      setNameValidate(false);
    } else {
      setNameValidate(true);
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

  const onChangeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;

    setComment(value);

    if (value) {
      setCommentValidate(false);
    } else {
      setCommentValidate(true);
    }
  };

  return (
    <div>
      <Title variyant="medium" className="mb-15">
        Написать отзыв
      </Title>
      <form>
        <div className="flex flex-col gap-15 mb-20">
          <div>
            <input
              type="text"
              placeholder="Ваше полное имя"
              className={clsx(["input w-full"], {
                "input-error": nameValidate,
              })}
              value={name}
              onChange={onChangeName}
            />
            {nameValidate && (
              <span className="text-error mt-5 inline-flex font-semibold">
                Заполните поле
              </span>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="Электронная почта"
              className={clsx(["input w-full"], {
                "input-error": emailValidate,
              })}
              value={email}
              onChange={onChangeEmail}
            />
            {emailValidate && (
              <span className="text-error mt-5 inline-flex font-semibold">
                Заполните поле
              </span>
            )}
          </div>
          <div>
            <textarea
              className={clsx(["textarea w-full h-[130]"], {
                "textarea-error": commentValidate,
              })}
              placeholder="Bio"
              value={comment}
              onChange={onChangeComment}
            />
            {commentValidate && (
              <span className="text-error mt-5 inline-flex font-semibold">
                Заполните поле
              </span>
            )}
          </div>

          <RatingChange />
        </div>

        <button className="btn bg-primary-300 text-secondary-350">
          Отправить
        </button>
      </form>
    </div>
  );
}

export default CatalogReviewForm;
