import { clsx } from "@/shared/lib/clsx";
import { FaPhoneAlt } from "react-icons/fa";
import { ReactNode } from "react";

interface IProps {
  className?: string;
  children?: ReactNode;
}

function PhoneBtn(props: IProps) {
  const { children, className = "" } = props;

  return (
    <a
      href={`tel:${children ?? "+998933672555"}`}
      className={clsx(
        [
          "bg-secondary-300  transition text-white rounded-6 inline-flex items-center gap-2 text-description-small py-2 px-3 md:text-description-medium hover:bg-secondary-400",
          className,
        ],
        {
          "font-semibold": !Boolean(children),
          "font-medium": Boolean(children),
        },
      )}
    >
      <FaPhoneAlt size={17} /> {children ?? `+998 93 367 25 55`}
    </a>
  );
}

export default PhoneBtn;
