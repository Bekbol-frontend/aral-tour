"use client";

import { Heading } from "@/shared/ui/Heading";
import CatalogReviewModal from "./CatalogReviewModal/CatalogReviewModal";
import { useCallback, useState } from "react";
import CatalogReviewSwiper from "./CatalogReviewSwiper/CatalogReviewSwiper";
import { ICatalogDetailReview } from "../../model/types";

interface IProps {
  tourId: number;
  catalogReview: ICatalogDetailReview[];
}

function CatalogReview({ tourId, catalogReview }: IProps) {
  const [modal, setModal] = useState(false);

  const onShowModal = useCallback(() => {
    setModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setModal(false);
  }, []);

  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center mb-30 md:mb-40">
          <Heading variyant="medium" className="text-center mb-10">
            Какие воспоминания остались у вас после этой поездки?
          </Heading>
          <button
            onClick={onShowModal}
            className="btn bg-primary-300 text-secondary-350 font-semibold"
          >
            Написать отзыв
          </button>
        </div>

        <CatalogReviewSwiper catalogReview={catalogReview} />
      </div>

      <CatalogReviewModal open={modal} onClose={onCloseModal} tourId={tourId} />
    </>
  );
}

export default CatalogReview;
