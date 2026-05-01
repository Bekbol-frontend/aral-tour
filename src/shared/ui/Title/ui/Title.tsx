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
      <h4
        className={clsx([
          "text-description-large leading-description-large md:leading-title-large  md:text-title-large font-semibold",
          className,
        ])}
      >
        {children}
      </h4>
    );
  }

  if (variyant === "medium") {
    return (
      <h5
        className={clsx([
          "text-description-medium leading-description-medium md:leading-title-medium md:text-title-medium font-semibold",
          className,
        ])}
      >
        {children}
      </h5>
    );
  }

  return (
    <h6
      className={clsx([
        "text-description-medium leading-description-small md:leading-title-small md:text-title-small font-semibold",
        className,
      ])}
    >
      {children}
    </h6>
  );
}

export default Title;
