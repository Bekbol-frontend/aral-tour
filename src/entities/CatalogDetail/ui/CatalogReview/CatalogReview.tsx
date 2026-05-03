"use client";

import { useCallback, useState } from "react";
import { Heading } from "@/shared/ui/Heading";
import CatalogReviewModal from "./CatalogReviewModal/CatalogReviewModal";
import CatalogReviewSwiper from "./CatalogReviewSwiper/CatalogReviewSwiper";
import { ICatalogDetailReview } from "../../model/types";
import { useTranslations } from "next-intl";

interface IProps {
  tourId: number;
  catalogReview: ICatalogDetailReview[];
}

function CatalogReview({ tourId, catalogReview }: IProps) {
  const [modal, setModal] = useState(false);

  const t = useTranslations("TourCard");

  const onShowModal = useCallback(() => {
    setModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setModal(false);
  }, []);

  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center">
          <Heading variyant="medium" className="text-center mb-10">
            {t("What memories do you have from this trip")}
          </Heading>
          <button
            onClick={onShowModal}
            className="btn bg-primary-300 text-secondary-350 font-semibold"
          >
            {t("Write a review")}
          </button>
        </div>

        <CatalogReviewSwiper catalogReview={catalogReview} />
      </div>

      <CatalogReviewModal open={modal} onClose={onCloseModal} tourId={tourId} />
    </>
  );
}

export default CatalogReview;
