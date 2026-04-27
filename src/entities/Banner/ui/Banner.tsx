"use client";

import { IBanner } from "@/shared/types/banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { EmptyData } from "@/shared/ui/EmptyData";
import { Heading } from "@/shared/ui/Heading";
import { env } from "@/shared/config/env";

interface IProps {
  data: IBanner;
}

function Banner({ data }: IProps) {
  if (!data) {
    return <EmptyData />;
  }

  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      modules={[Autoplay, EffectFade]}
      className="h-[70vh] md:h-[80vh]"
    >
      {data.images.map((el, index) => (
        <SwiperSlide
          key={`${el}_${index}`}
          className="h-full! w-full! flex! items-center! justify-center!"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${env.baseUrl}${el})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Heading className="text-primary-250">{data.title}</Heading>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Banner;
