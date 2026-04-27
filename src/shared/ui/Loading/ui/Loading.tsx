import { useTranslations } from "next-intl";
import { Title } from "../../Title";
import { Description } from "../../Description";

export default function Loading() {
  const t = useTranslations("Loading");

  return (
    <div className="fixed inset-0 z-50 bg-secondary-500 flex items-center justify-center overflow-hidden p-15">
      <div className="absolute inset-0 overflow-hidden">
        <div className="wave wave-1" />
        <div className="wave wave-2" />
        <div className="wave wave-3" />
      </div>

      <div className="relative flex flex-col items-center gap-8">
        <div className="relative">
          <div className="w-28 h-28 rounded-full border-4 border-secondary-150/30 border-t-primary-350 animate-spin" />

          <div className="absolute inset-4 rounded-full border-2 border-primary-250 animate-pulse" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="compass-needle" />
          </div>
        </div>

        <div className="text-center">
          <Title className="tracking-[6px] text-primary-350 uppercase">
            {t("Aralsea Tour")}
          </Title>

          <Description className="mt-4 text-secondary-100 tracking-[4px] animate-pulse">
            {t("Exploring The Aral Sea")}...
          </Description>
        </div>

        <div className="flex gap-3">
          <span className="loader-dot delay-0"></span>
          <span className="loader-dot delay-200"></span>
          <span className="loader-dot delay-400"></span>
        </div>
      </div>
    </div>
  );
}
