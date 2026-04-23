import { ChevronLeft, ChevronRight } from "lucide-react";
import { Ref } from "react";

interface IProps {
  prevRef: Ref<HTMLButtonElement>;
  nextRef: Ref<HTMLButtonElement>;
}

function HeroNavigate({ prevRef, nextRef }: IProps) {
  return (
    <>
      <div className="flex gap-10 justify-between absolute z-4 inset-auto bottom-20 right-20 md:inset-0">
        <button
          ref={prevRef}
          className="btn btn-outline md:rounded-none! md:h-full border-none bg-primary-300 text-secondary-300 md:bg-[rgba(0,0,0,0.07)] md:hover:bg-[rgba(0,0,0,0.2)] md:text-white md:w-[70] p-0 md:p-1 w-[40] h-[40]"
        >
          <ChevronLeft />
        </button>

        <button
          ref={nextRef}
          className="btn btn-outline md:rounded-none! md:h-full border-none bg-primary-300 text-secondary-300 md:bg-[rgba(0,0,0,0.07)] md:hover:bg-[rgba(0,0,0,0.2)] md:text-white md:w-[70] p-0 md:p-1 w-[40] h-[40]"
        >
          <ChevronRight />
        </button>
      </div>
    </>
  );
}

export default HeroNavigate;
