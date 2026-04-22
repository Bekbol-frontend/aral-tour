import { clsx } from "@/shared/lib/clsx";
import { TEXT_VARIYANT } from "@/shared/types/text-variyant";
import { ReactNode } from "react";

interface IProps {
  variyant?: TEXT_VARIYANT;
  children?: ReactNode;
  className?: string;
}

function Heading(props: IProps) {
  const { variyant = "large", children, className = "" } = props;

  if (variyant === "large") {
    return (
      <h1
        className={clsx([
          "text-title-large leading-title-large md:leading-heading-large  md:text-heading-large font-bold",
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
          "text-title-medium leading-title-medium md:leading-heading-medium md:text-heading-medium font-bold",
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
        "text-title-small leading-title-small md:leading-heading-small md:text-heading-small font-semibold",
        className,
      ])}
    >
      {children}
    </h3>
  );
}

export default Heading;
