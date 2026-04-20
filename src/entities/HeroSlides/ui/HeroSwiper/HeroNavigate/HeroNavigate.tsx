import { ChevronLeft, ChevronRight } from "lucide-react";
import { Ref } from "react";

interface IProps {
  prevRef: Ref<HTMLButtonElement>;
  nextRef: Ref<HTMLButtonElement>;
}

function HeroNavigate({ prevRef, nextRef }: IProps) {
  return (
    <>
      <button
        ref={prevRef}
        className="btn absolute z-10 top-0 bottom-0 h-full left-0 btn-outline border-none bg-[rgba(0,0,0,0.07)] hover:bg-[rgba(0,0,0,0.2)] text-white w-[50] md:w-[70] p-0 md:p-1"
      >
        <ChevronLeft />
      </button>

      <button
        ref={nextRef}
        className="btn absolute z-10 top-0 bottom-0 h-full right-0 btn-outline border-none bg-[rgba(0,0,0,0.07)] hover:bg-[rgba(0,0,0,0.2)] text-white w-[50] md:w-[70] p-0 md:p-1"
      >
        <ChevronRight />
      </button>
    </>
  );
}

export default HeroNavigate;
