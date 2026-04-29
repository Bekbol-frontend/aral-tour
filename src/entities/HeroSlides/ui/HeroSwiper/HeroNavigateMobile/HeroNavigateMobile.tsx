import { Ref } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

interface IProps {
  prevRef: Ref<HTMLButtonElement>;
  nextRef: Ref<HTMLButtonElement>;
}

function HeroNavigateMobile({ prevRef, nextRef }: IProps) {
  return (
    <div className="inline-flex md:hidden gap-10 absolute z-3 bottom-20 right-20">
      <button
        ref={prevRef}
        className="btn btn-outline border-none bg-primary-300 text-secondary-300 p-0 w-[40] h-[40]"
      >
        <FaChevronLeft />
      </button>

      <button
        ref={nextRef}
        className="btn btn-outline border-none bg-primary-300 text-secondary-300 p-0 w-[40] h-[40]"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default HeroNavigateMobile;
