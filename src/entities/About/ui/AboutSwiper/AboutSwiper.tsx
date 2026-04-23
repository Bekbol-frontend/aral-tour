"use client";

import { IAboutDataImages } from "../../model/types";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { env } from "@/shared/config/env";
import AboutSwiperNavigate from "./AboutSwiperNavigate/AboutSwiperNavigate";

interface IProps {
  data: IAboutDataImages[];
}

function AboutSwiper({ data }: IProps) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [_, setInit] = useState(false);

  return (
    <div className="relative">
      <Swiper
        spaceBetween={10}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={() => setInit(true)}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="h-[350] md:h-[450]"
        breakpoints={{
          0: {
            slidesPerView: 1.3,
          },
          768: {
            slidesPerView: 2.3,
          },
        }}
      >
        {data.map((el) => (
          <SwiperSlide
            key={el.id}
            className="h-[300]! md:h-[400]! flex items-center justify-center"
          >
            <Image
              src={`${env.baseUrl}${el.image_path}`}
              alt="About images"
              width={300}
              height={300}
              className="w-full! h-full! object-cover rounded-6"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <AboutSwiperNavigate prevRef={prevRef} nextRef={nextRef} />
    </div>
  );
}

export default AboutSwiper;
