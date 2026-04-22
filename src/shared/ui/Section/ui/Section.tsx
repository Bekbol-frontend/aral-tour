import { clsx } from "@/shared/lib/clsx";
import { CSSProperties, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

function Section({ children, className = "", style }: IProps) {
  return (
    <section style={style} className={clsx(["py-[40] md:py-[60]", className])}>
      {children}
    </section>
  );
}

export default Section;
