"use client";

import { Title } from "@/shared/ui/Title";
import { Heading } from "@/shared/ui/Heading";
import { env } from "@/shared/config/env";
import { useRef, useState } from "react";
import HeroNavigate from "./HeroNavigate/HeroNavigate";

import { IHeroSlide } from "../../model/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import SwiperBtns from "./SwiperBtns/SwiperBtns";

interface IProps {
  data: IHeroSlide[];
}

function HeroSwiper({ data }: IProps) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [_, setInit] = useState(false);

  return (
    <Swiper
      effect="fade"
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      modules={[Navigation, EffectFade]}
      loop
      onInit={() => setInit(true)}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      className="h-[70vh] md:h-[80vh] relative!"
    >
      {data.map((el) => (
        <SwiperSlide
          className="text-center flex! flex-col items-center justify-center h-full!"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${env.baseUrl}/${el.image_path})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="max-w-[700] mx-auto px-50 py-20 md:px-30">
            <Title variyant="small" className="text-primary-50">
              {el.title}
            </Title>
            <Heading variyant="small" className="text-primary-50 my-10">
              {el.subtitle}
            </Heading>
            <Title variyant="medium" className="text-primary-50 mb-50">
              {el.description}
            </Title>

            <SwiperBtns />
          </div>
        </SwiperSlide>
      ))}

      <HeroNavigate prevRef={prevRef} nextRef={nextRef} />
    </Swiper>
  );
}

export default HeroSwiper;
