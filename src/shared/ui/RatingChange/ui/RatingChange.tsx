"use client";
import { clsx } from "@/shared/lib/clsx";
import { useState } from "react";

interface IProps {
  className?: string;
  rating: number;
  onChangeRating: (rating: number) => void;
}

function RatingChange({ className = "", rating, onChangeRating }: IProps) {
  const [hover, setHover] = useState(0);

  return (
    <div className={clsx(["flex gap-5", className])}>
      {Array(5)
        .fill("")
        .map((_, index) => {
          index += 1;

          return (
            <button
              key={index}
              type="button"
              className={clsx(
                [
                  "bg-base-border inline-flex w-[24] h-[24] shadow cursor-pointer transition-all duration-300 ease-in-out scale-100 hover:scale-130",
                ],
                {
                  " bg-secondary-150 ": index <= (hover || rating),
                },
              )}
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
              onClick={() => {
                onChangeRating(index);
              }}
              onMouseEnter={() => {
                setHover(index);
              }}
              onMouseLeave={() => {
                setHover(0);
              }}
            />
          );
        })}
    </div>
  );
}

export default RatingChange;
