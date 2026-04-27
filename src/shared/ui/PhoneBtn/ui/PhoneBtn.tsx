"use client";

import { clsx } from "@/shared/lib/clsx";
import { FaPhoneAlt } from "react-icons/fa";
import { ReactNode } from "react";
import { useContextContact } from "@/app/provider/ContactProvider";

interface IProps {
  className?: string;
  children?: ReactNode;
}

function PhoneBtn(props: IProps) {
  const { children, className = "" } = props;
  const { phone } = useContextContact();

  return (
    <a
      href={`tel:${children ?? phone}`}
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
      <FaPhoneAlt size={15} /> {children ?? phone}
    </a>
  );
}

export default PhoneBtn;
