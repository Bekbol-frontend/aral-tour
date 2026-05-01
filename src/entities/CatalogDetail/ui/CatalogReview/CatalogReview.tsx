"use client";

import { Heading } from "@/shared/ui/Heading";
import CatalogReviewModal from "./CatalogReviewModal/CatalogReviewModal";
import { useCallback, useState } from "react";

function CatalogReview() {
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
        <div className="flex flex-col justify-center items-center">
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
      </div>

      <CatalogReviewModal open={modal} onClose={onCloseModal} />
    </>
  );
}

export default CatalogReview;
