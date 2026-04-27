"use client";

import { DatabaseSearch } from "lucide-react";
import { Title } from "../../Title";
import { useTranslations } from "next-intl";

function EmptyData() {
  const t = useTranslations("EmptyData");

  return (
    <div className="flex items-center flex-col gap-10 justify-center p-30 md:p-40">
      <DatabaseSearch size={25} />
      <Title>{t("title")}</Title>
    </div>
  );
}

export default EmptyData;
