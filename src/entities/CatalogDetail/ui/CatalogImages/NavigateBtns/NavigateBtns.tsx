"use client";

import { RefObject } from "react";
import type { Swiper as SwiperType } from "swiper";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { clsx } from "@/shared/lib/clsx";

const btnClass =
  "opacity-100 absolute z-2 top-[50%] translate-y-[-50%] btn btn-circle! shadow-none! border-none!";

interface IProps {
  isBeginning: boolean;
  isEnd: boolean;
  swiperRef: RefObject<SwiperType | null>;
}

function NavigateBtns({ isBeginning, isEnd, swiperRef }: IProps) {
  return (
    <>
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className={clsx([`${btnClass} left-20`], {
          "opacity-50! cursor-not-allowed": isBeginning,
        })}
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className={clsx([`${btnClass} right-20`], {
          "opacity-50! cursor-not-allowed": isEnd,
        })}
      >
        <FaChevronRight />
      </button>
    </>
  );
}

export default NavigateBtns;
