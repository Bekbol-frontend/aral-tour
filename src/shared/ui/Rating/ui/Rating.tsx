import { clsx } from "@/shared/lib/clsx";

interface IProps {
  value: number;
  className?: string;
}

function Rating({ value, className = "" }: IProps) {
  return (
    <div className={clsx(["flex gap-5", className])}>
      {Array(5)
        .fill("")
        .map((_, index) => {
          const rating = Math.floor(value);
          const active = index + 1 <= rating;

          return (
            <span
              key={index}
              className={clsx(["bg-base-border inline-flex w-[24] h-[24]"], {
                " bg-secondary-150 ": active,
              })}
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            />
          );
        })}
    </div>
  );
}

export default Rating;
