"use client";

import { ICatalogDetailReview } from "@/entities/CatalogDetail/model/types";
import { useCallback, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Modal } from "@/shared/ui/Modal";
import { YoutubePlayer } from "@/shared/ui/YoutubePlayer";
import ReviewSwiperNavigate from "./ReviewSwiperNavigate/ReviewSwiperNavigate";
import CatalogReviewSwiperItem from "./CatalogReviewSwiperItem/CatalogReviewSwiperItem";

import "swiper/css";
import "swiper/css/pagination";

interface IProps {
  catalogReview: ICatalogDetailReview[];
}

function CatalogReviewSwiper({ catalogReview }: IProps) {
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

  if (!catalogReview.length) return null;

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
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2.3,
            },
          }}
          className="pb-20!"
        >
          {catalogReview.map((el) => (
            <SwiperSlide key={el.id}>
              <CatalogReviewSwiperItem
                userName={el.user_name}
                email={el.email}
                rating={el.rating}
                comment={el.comment}
                videoUrl={el.video_url}
                createdAt={el.created_at}
                onShowModal={onShowModal}
              />
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

export default CatalogReviewSwiper;
