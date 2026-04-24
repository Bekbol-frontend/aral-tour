import { clsx } from "@/shared/lib/clsx";
import { Heading } from "../../Heading";
import { getTranslations } from "next-intl/server";

interface IProps {
  title: string;
  className?: string;
  noTranslate?: boolean;
}

async function MainTitle({
  title,
  className = "",
  noTranslate = false,
}: IProps) {
  const t = await getTranslations("MainTitle");

  return (
    <div
      className={clsx([
        "mb-[30] md:mb-[40] flex items-center justify-between gap-2",
        className,
      ])}
    >
      <span
        className={`bg-[url('/naqsh/border1.svg')] bg-cover bg-no-repeat bg-center flex w-full h-[36] md:h-[70]`}
      />
      <Heading
        variyant="medium"
        className="text-secondary-300 text-center min-w-[200] max-w-[350] w-full"
      >
        {noTranslate ? title : t(title)}
      </Heading>
      <span
        className={`bg-[url('/naqsh/border2.svg')] bg-cover bg-no-repeat bg-center flex w-full h-[36] md:h-[70]`}
      />
    </div>
  );
}

export default MainTitle;
