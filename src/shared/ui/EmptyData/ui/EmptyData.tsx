"use client";

import { BsDatabaseDash } from "react-icons/bs";
import { Title } from "../../Title";
import { useTranslations } from "next-intl";

function EmptyData() {
  const t = useTranslations("EmptyData");

  return (
    <div className="flex items-center flex-col gap-10 justify-center p-30 md:p-40">
      <BsDatabaseDash size={35} />
      <Title>{t("title")}</Title>
    </div>
  );
}

export default EmptyData;
