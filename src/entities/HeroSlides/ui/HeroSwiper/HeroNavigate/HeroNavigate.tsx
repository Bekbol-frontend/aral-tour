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
        className="btn absolute z-10 top-0 bottom-0 h-full left-0 btn-outline border-none bg-[rgba(0,0,0,0.07)] hover:bg-[rgba(0,0,0,0.2)] text-white w-[50] md:w-[70] p-0 hidden md:inline-flex md:p-1"
      >
        <ChevronLeft />
      </button>

      <button
        ref={nextRef}
        className="btn absolute z-10 top-0 bottom-0 h-full right-0 btn-outline border-none bg-[rgba(0,0,0,0.07)] hover:bg-[rgba(0,0,0,0.2)] text-white w-[50] md:w-[70] p-0 hidden md:inline-flex md:p-1"
      >
        <ChevronRight />
      </button>

      <div className="flex items-center gap-15 md:hidden absolute bottom-20 right-20 z-1">
        <button
          ref={prevRef}
          className="btn p-1 w-[40] h-[40] bg-primary-300 text-secondary-300 border-none shadow-secondary-300"
        >
          <ChevronLeft size={25} />
        </button>
        <button
          ref={nextRef}
          className="btn p-1 w-[40] h-[40] bg-primary-300 text-secondary-300 border-none shadow-secondary-300"
        >
          <ChevronRight size={25} />
        </button>
      </div>
    </>
  );
}

export default HeroNavigate;
