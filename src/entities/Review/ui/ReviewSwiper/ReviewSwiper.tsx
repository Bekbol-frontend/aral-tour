"use client";

import { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { IReview } from "../../model/types";
import { Description } from "@/shared/ui/Description";
import { Title } from "@/shared/ui/Title";
import { Rating } from "@/shared/ui/Rating";
import { Play } from "lucide-react";
import ReviewSwiperNavigate from "./ReviewSwiperNavigate/ReviewSwiperNavigate";

interface IProps {
  data: IReview[];
}

function ReviewSwiper({ data }: IProps) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [_, setInit] = useState(false);

  return (
    <div className="relative pb-60">
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
            <div className="h-full! border-[1] border-light-gray-250 rounded-6 p-20 relative overflow-hidden">
              <span className="shadow inline-flex items-center justify-center bg-secondary-250 text-primary-300 absolute top-0 right-0 rounded-bl-6 py-15 px-20 cursor-pointer">
                <Play />
              </span>
              <div className="mb-30">
                <Title variyant="small" className="text-secondary-300">
                  {el.user_name}
                </Title>
                <div className="flex items-center gap-15 my-15">
                  <span className="inline-flex items-center justify-center rounded-full w-[35] h-[35] bg-primary-350 text-secondary-300 text-description-large shadow">
                    {el.rating}
                  </span>
                  <Rating value={el.rating} />
                </div>
                <Title variyant="medium" className="text-gray-100">
                  {el.city}
                </Title>
              </div>
              <div>
                <span className="bg-secondary-50 py-5 px-10 rounded-6 text-description-small md:text-description-large font-semibold mb-20 inline-flex">
                  {el.tour.title}
                </span>
                <Description variyant="medium">{el.comment}</Description>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <ReviewSwiperNavigate prevRef={prevRef} nextRef={nextRef} />
    </div>
  );
}

export default ReviewSwiper;
