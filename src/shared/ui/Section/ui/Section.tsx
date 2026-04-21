import { clsx } from "@/shared/lib/clsx";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

function Section({ children, className = "" }: IProps) {
  return (
    <section className={clsx(["py-[40] md:py-[60]", className])}>
      {children}
    </section>
  );
}

export default Section;
