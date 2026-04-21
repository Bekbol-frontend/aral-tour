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
          return (
            <span
              key={index}
              className="bg-secondary-150 inline-flex w-[24] h-[24] cursor-pointer"
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
