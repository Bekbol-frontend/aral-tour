import { TEXT_VARIYANT } from "@/shared/types/text-variyant";
import { ReactNode } from "react";

interface IProps {
  variyant?: TEXT_VARIYANT;
  children?: ReactNode;
}

function Heading(props: IProps) {
  const { variyant = "large", children } = props;

  if (variyant === "large") {
    return (
      <h1 className="text-title-large leading-title-large md:leading-heading-large  md:text-heading-large font-semibold">
        {children}
      </h1>
    );
  }

  if (variyant === "medium") {
    return (
      <h2 className="text-title-medium leading-title-medium md:leading-heading-medium md:text-heading-medium font-semibold">
        {children}
      </h2>
    );
  }

  return (
    <h3 className="text-title-small leading-title-small md:leading-heading-small md:text-heading-small font-semibold">
      {children}
    </h3>
  );
}

export default Heading;
