"use client";

import { Ref } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface IProps {
  prevRef: Ref<HTMLButtonElement>;
  nextRef: Ref<HTMLButtonElement>;
}

function AboutSwiperNavigate({ prevRef, nextRef }: IProps) {
  return (
    <>
      <button
        className="btn bg-primary-350 text-secondary-300 shadow-none border-none absolute top-[45%] left-10 -translate-y-[45%] z-1 w-[50] h-[50] p-0 hidden md:inline-flex"
        ref={prevRef}
      >
        <ChevronLeft />
      </button>
      <button
        className="btn bg-primary-350 text-secondary-300 shadow-none border-none absolute top-[45%] right-10 -translate-y-[45%] z-1 w-[50] h-[50] p-0 hidden md:inline-flex"
        ref={nextRef}
      >
        <ChevronRight />
      </button>
    </>
  );
}

export default AboutSwiperNavigate;
