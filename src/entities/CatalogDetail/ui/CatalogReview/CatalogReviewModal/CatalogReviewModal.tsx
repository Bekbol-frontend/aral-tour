"use client";

import { ChangeEvent, SubmitEvent, useCallback, useState } from "react";
import toast from "react-hot-toast";
import { Modal } from "@/shared/ui/Modal";
import axios from "axios";
import PUBLIC_API from "@/shared/api/publicAPI";
import { Title } from "@/shared/ui/Title";
import { clsx } from "@/shared/lib/clsx";
import { RatingChange } from "@/shared/ui/RatingChange";

interface IProps {
  open: boolean;
  onClose: () => void;
  tourId: number;
}

function CatalogReviewModal({ open, onClose, tourId }: IProps) {
  const [name, setName] = useState("");
  const [nameValidate, setNameValidate] = useState(false);

  const [email, setEmail] = useState("");
  const [emailValidate, setEmailValidate] = useState(false);

  const [comment, setComment] = useState("");
  const [commentValidate, setCommentValidate] = useState(false);

  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);

  const onCloseModal = useCallback(() => {
    onClose();

    setName("");
    setEmail("");
    setComment("");
    setRating(0);
    setLoading(false);
  }, [onClose]);

  const onChangeRating = useCallback((value: number) => {
    setRating(value);
  }, []);

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

  const onSubmitReview = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name && !email && !comment) {
      setNameValidate(true);
      setEmailValidate(true);
      setCommentValidate(true);
      return;
    }

    if (!name) {
      setNameValidate(true);
      return;
    }

    if (!email) {
      setEmailValidate(true);
      return;
    }

    if (!comment) {
      setCommentValidate(true);
      return;
    }

    const dataReview = {
      tour_id: tourId,
      name,
      email,
      comment,
      rating,
    };

    try {
      setLoading(true);

      const res = await PUBLIC_API.post<{ success: boolean; message: string }>(
        "api/reviews",
        dataReview,
      );

      if (!res.data.success) {
        throw new Error(res.data.message);
      }

      toast.success(res.data.message);
      onCloseModal();
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response) {
          toast.error(err.response.data.message);
        }
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={onCloseModal}>
      <div>
        <Title variyant="medium" className="mb-15">
          Написать отзыв
        </Title>
        <form onSubmit={onSubmitReview}>
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

            <RatingChange rating={rating} onChangeRating={onChangeRating} />
          </div>

          <button
            disabled={loading}
            className={clsx(["btn bg-primary-300 text-secondary-350"], {
              "cursor-not-allowed! opacity-80!": loading,
            })}
          >
            {loading ? "Загрузка..." : "Отправить"}
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default CatalogReviewModal;
