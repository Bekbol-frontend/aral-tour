import { clsx } from "@/shared/lib/clsx";
import type { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
  className?: string;
}

function Container({ children, className = "" }: IProps) {
  return (
    <div className={clsx([`max-w-[1400] w-full mx-auto px-20 ${className}`])}>
      {children}
    </div>
  );
}

export default Container;
