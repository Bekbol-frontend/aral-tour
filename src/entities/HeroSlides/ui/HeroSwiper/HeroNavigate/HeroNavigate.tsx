import { Ref } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

interface IProps {
  prevRef: Ref<HTMLButtonElement>;
  nextRef: Ref<HTMLButtonElement>;
}

function HeroNavigate({ prevRef, nextRef }: IProps) {
  return (
    <div className="inline-flex gap-5 absolute bottom-20 right-20 md:static">
      <button
        ref={prevRef}
        className="btn btn-outline md:rounded-none! md:h-full border-none bg-primary-300 text-secondary-300 md:bg-[rgba(0,0,0,0.07)] md:hover:bg-[rgba(0,0,0,0.2)] md:text-white md:w-[70] p-0 md:p-1 w-[40] h-[40] static md:absolute top-0 bottom-0 left-0 z-1"
      >
        <FaChevronLeft />
      </button>

      <button
        ref={nextRef}
        className="btn btn-outline md:rounded-none! md:h-full border-none bg-primary-300 text-secondary-300 md:bg-[rgba(0,0,0,0.07)] md:hover:bg-[rgba(0,0,0,0.2)] md:text-white md:w-[70] p-0 md:p-1 w-[40] h-[40] static md:absolute top-0 bottom-0 right-0 z-1"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default HeroNavigate;
