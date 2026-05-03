"use client";

import { BookModal } from "@/shared/ui/BookModal";
import { Description } from "@/shared/ui/Description";
import { Heading } from "@/shared/ui/Heading";
import { Rating } from "@/shared/ui/Rating";
import { Title } from "@/shared/ui/Title";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";
import {
  FaEye,
  FaMapMarked,
  FaPhoneAlt,
  FaUserCheck,
  FaUsers,
} from "react-icons/fa";
import { classBlock } from "../../model/classBlock";

interface IProps {
  slogan: string;
  duration_days: number;
  duration_nights: number;
  rating: number;
  reviews_count: number;
  price: number;
  max_people: number;
  min_age: number;
  routes: string;
  phone: string;
}

function CatalogInfo(props: IProps) {
  const t = useTranslations("TourCard");
  const [modal, setModal] = useState(false);

  const onShowModal = useCallback(() => {
    setModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setModal(false);
  }, []);

  const {
    slogan,
    duration_days,
    duration_nights,
    rating,
    reviews_count,
    price,
    max_people,
    min_age,
    routes,
    phone,
  } = props;

  return (
    <>
      <div className={classBlock}>
        <Heading variyant="small">{slogan}</Heading>

        <div className="bg-light-gray-200 inline-flex py-5 px-20 rounded-6 my-20">
          <Description variyant="medium">
            {duration_days} {t("day")}{" "}
            {duration_nights > 0 ? (
              <>
                {"/"} {duration_nights} {t("night")}
              </>
            ) : null}
          </Description>
        </div>

        <div className="mb-20 flex items-center gap-20">
          <div className="flex gap-10 items-center">
            <div className="w-[40] h-[40] inline-flex items-center justify-center rounded-full bg-primary-300 text-secondary-300 shadow">
              <Description variyant="large">{rating}</Description>
            </div>
            <div className="flex flex-col">
              <Rating value={rating} />
            </div>
          </div>

          <Description variyant="medium" className="flex items-center gap-5">
            <FaEye size={20} /> {`(${reviews_count})`} {t("reviews")}
          </Description>
        </div>

        <div className="mb-30">
          <Heading variyant="medium" className="mb-5">
            {t("from")} {price} $
          </Heading>
          <Description className="text-gray-150">
            {t("The price depends on the number of people in the group")}
          </Description>
        </div>

        <div className="flex flex-col md:flex-row gap-15 md:gap-30 mb-30">
          <div>
            <div className="flex items-center gap-10 mb-5">
              <FaUsers className="text-secondary-200 text-title-large" />
              <Title>{max_people}+</Title>
            </div>
            <Description className="text-gray-150">
              {t("Maximum number of travelers")}
            </Description>
          </div>
          <div>
            <div className="flex items-center gap-10 mb-5">
              <FaUserCheck className="text-secondary-200 text-title-large" />
              <Title>{min_age}+</Title>
            </div>
            <Description className="text-gray-150">{t("Age")}</Description>
          </div>
        </div>

        <div className="flex gap-10 mb-30">
          <button
            className="btn bg-primary-350 text-secondary-300"
            onClick={onShowModal}
          >
            {t("Book")}
          </button>
          <a
            href={`tel:${phone}`}
            className="btn bg-secondary-350 text-primary-300"
          >
            <FaPhoneAlt /> {phone}
          </a>
        </div>

        <div>
          <div className="flex gap-15 mb-5">
            <span className="p-15 shadow bg-primary-350 text-secondary-300 rounded-4 inline-flex items-center justify-center self-start">
              <FaMapMarked className="text-title-medium" />
            </span>
            <Description>{routes}</Description>
          </div>
          <Description className="text-gray-150">{t("Road map")}</Description>
        </div>
      </div>

      <BookModal open={modal} onClose={onCloseModal} />
    </>
  );
}

export default CatalogInfo;
