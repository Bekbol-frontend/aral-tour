import { clsx } from "@/shared/lib/clsx";
import { TEXT_VARIYANT } from "@/shared/types/text-variyant";
import { ReactNode } from "react";

interface IProps {
  variyant?: TEXT_VARIYANT;
  children?: ReactNode;
  className?: string;
}

function Title(props: IProps) {
  const { variyant = "large", children, className = "" } = props;

  if (variyant === "large") {
    return (
      <h1
        className={clsx([
          "text-description-large leading-description-large md:leading-title-large  md:text-title-large font-semibold",
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
          "text-description-medium leading-description-medium md:leading-title-medium md:text-title-medium font-semibold",
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
        "text-description-medium leading-description-small md:leading-title-small md:text-title-small font-semibold",
        className,
      ])}
    >
      {children}
    </h3>
  );
}

export default Title;
