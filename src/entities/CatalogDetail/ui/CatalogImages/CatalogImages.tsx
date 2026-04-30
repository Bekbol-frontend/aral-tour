"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import { ITourImage } from "@/entities/Tour";
import { env } from "@/shared/config/env";
import NavigateBtns from "./NavigateBtns/NavigateBtns";

// SWIPER-STYLES
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { clsx } from "@/shared/lib/clsx";

interface IProps {
  data: ITourImage[];
}

function CatalogImages({ data }: IProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="">
      <div className="w-full h-[400] mb-20 relative">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={handleSlideChange}
          spaceBetween={5}
          navigation={false}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="w-full! h-full!"
        >
          {data.map((el, index) => (
            <SwiperSlide key={index} className="w-full! h-full!">
              <Image
                src={`${env.baseUrl}/${el.url}`}
                alt="Image"
                width={400}
                height={400}
                priority
                className="object-cover w-full! h-full! rounded-10"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <NavigateBtns
          isBeginning={isBeginning}
          isEnd={isEnd}
          swiperRef={swiperRef}
        />
      </div>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-[100] w-full!"
      >
        {data.map((el, index) => (
          <SwiperSlide key={el.id} className="h-full! cursor-pointer">
            <Image
              src={`${env.baseUrl}/${el.url}`}
              alt="Image"
              width={100}
              height={100}
              priority
              className={clsx(["object-cover w-full! h-full! rounded-6"], {
                "border-2 border-secondary-300": activeIndex === index,
              })}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CatalogImages;
