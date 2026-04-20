"use client";

import { IHeroSlide } from "../../model/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { Title } from "@/shared/ui/Title";
import { Heading } from "@/shared/ui/Heading";
import { env } from "@/shared/config/env";

interface IProps {
  data: IHeroSlide[];
}

function HeroSwiper({ data }: IProps) {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="min-h-[70vh]">
      {data.map((el) => (
        <SwiperSlide
          className="text-center min-h-[70vh] flex! flex-col items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${env.baseUrl}/${el.image_path})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-[700] mx-auto border-amber-300">
            <Title variyant="small" className="text-primary-50">
              {el.title}
            </Title>
            <Heading variyant="small" className="text-primary-50 my-10">
              {el.subtitle}
            </Heading>
            <Title variyant="medium" className="text-primary-50 mb-50">
              {el.description}
            </Title>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSwiper;
