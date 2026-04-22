import { DatabaseSearch } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Title } from "../../Title";

async function EmptyData() {
  const t = await getTranslations("EmptyData");

  return (
    <div className="flex items-center flex-col gap-10 justify-center p-30 md:p-40">
      <DatabaseSearch size={25} />
      <Title>{t("title")}</Title>
    </div>
  );
}

export default EmptyData;
