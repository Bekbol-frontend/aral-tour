import { clsx } from "@/shared/lib/clsx";
import { TEXT_VARIYANT } from "@/shared/types/text-variyant";
import { ReactNode } from "react";

interface IProps {
  variyant?: TEXT_VARIYANT;
  children?: ReactNode;
  className?: string;
}

function Description(props: IProps) {
  const { variyant = "large", children, className = "" } = props;

  if (variyant === "large") {
    return (
      <h1
        className={clsx([
          "text-description-medium leading-description-medium md:leading-description-large  md:text-description-large font-semibold",
          className,
        ])}
      >
        {children}
      </h1>
    );
  }

  if (variyant === "medium") {
    return (
      <h2
        className={clsx([
          "text-description-small leading-description-small md:leading-description-medium md:text-description-medium font-medium",
          className,
        ])}
      >
        {children}
      </h2>
    );
  }

  return (
    <h3
      className={clsx([
        "text-description-small leading-description-small font-medium",
        className,
      ])}
    >
      {children}
    </h3>
  );
}

export default Description;
