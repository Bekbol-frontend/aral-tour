"use client";

import { Ref } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

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
        <FaChevronLeft />
      </button>
      <button
        className="btn bg-primary-350 text-secondary-300 shadow-none border-none w-[40] h-[40] p-0"
        ref={nextRef}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default ReviewSwiperNavigate;
