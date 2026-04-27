"use client";

import { useCallback, useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { IReview } from "../../model/types";
import ReviewSwiperNavigate from "./ReviewSwiperNavigate/ReviewSwiperNavigate";
import { Modal } from "@/shared/ui/Modal";
import { YoutubePlayer } from "@/shared/ui/YoutubePlayer";
import { ReviewCard } from "@/entities/ReviewsList";

interface IProps {
  data: IReview[];
}

function ReviewSwiper({ data }: IProps) {
  const [modal, setModal] = useState(false);
  const [urlYoutube, setUrlYoutube] = useState("");
  const [_, setInit] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const onClose = useCallback(() => {
    setModal(false);
    setUrlYoutube("");
  }, []);

  const onShowModal = useCallback((url: string) => {
    setModal(true);
    setUrlYoutube(url);
  }, []);

  return (
    <>
      <div className="relative">
        <Swiper
          spaceBetween={10}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={() => setInit(true)}
          modules={[Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
            },
            768: {
              slidesPerView: 2.3,
            },
          }}
          className="pb-20!"
        >
          {data.map((el) => (
            <SwiperSlide key={el.id}>
              <ReviewCard onShowModal={onShowModal} videoUrl={el.video_url} userName={el.user_name} rating={el.rating} city={el.city} title={el.tour.title} comment={el.comment} />
            </SwiperSlide>
          ))}
        </Swiper>

        <ReviewSwiperNavigate prevRef={prevRef} nextRef={nextRef} />
      </div>

      <Modal open={modal} onClose={onClose}>
        <YoutubePlayer url={urlYoutube} className="h-[450]" />
      </Modal>
    </>
  );
}

export default ReviewSwiper;
