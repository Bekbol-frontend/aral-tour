"use client";

import { Ref } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface IProps {
  prevRef: Ref<HTMLButtonElement>;
  nextRef: Ref<HTMLButtonElement>;
}

function ReviewSwiperNavigate({ prevRef, nextRef }: IProps) {
  return (
    <div className="flex justify-center gap-10">
      <button
        className="btn bg-primary-350 text-secondary-300 shadow-none border-none w-[40] h-[40] p-0"
        ref={prevRef}
      >
        <ChevronLeft />
      </button>
      <button
        className="btn bg-primary-350 text-secondary-300 shadow-none border-none w-[40] h-[40] p-0"
        ref={nextRef}
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default ReviewSwiperNavigate;
