"use client";

import { TourCard } from "@/entities/TourCard";
import { ITour } from "../../model/types";
import { useCallback, useState } from "react";
import { BookModal } from "@/shared/ui/BookModal";

interface IProps {
  data: ITour[];
}

function TourList({ data }: IProps) {
  const [modal, setModal] = useState(false);

  const onShowModal = useCallback(() => {
    setModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setModal(false);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {data.map((tour) => (
          <TourCard
            key={tour.id}
            slug={tour.slug}
            imgUrl={tour.main_image}
            title={tour.title}
            duration_days={tour.duration_days}
            duration_nights={tour.duration_nights}
            rating={tour.rating}
            reviews_count={tour.reviews_count}
            slogan={tour.slogan}
            price={tour.price}
            phone={tour.phone}
            onShowModal={onShowModal}
          />
        ))}
      </div>

      <BookModal open={modal} onClose={onCloseModal} />
    </>
  );
}

export default TourList;
