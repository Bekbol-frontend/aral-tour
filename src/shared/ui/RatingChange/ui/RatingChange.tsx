"use client";
import { clsx } from "@/shared/lib/clsx";
import { useState } from "react";

interface IProps {
  className?: string;
}

function RatingChange({ className = "" }: IProps) {
  const [rating, setRating] = useState(0);
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
                  "bg-base-border inline-flex w-[24] h-[24] shadow cursor-pointer",
                ],
                {
                  " bg-secondary-150 ": index <= (hover || rating),
                },
              )}
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
              onClick={() => {
                setRating(index);
              }}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            />
          );
        })}
    </div>
  );
}

export default RatingChange;
