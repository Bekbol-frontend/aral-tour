import { Heading } from "@/shared/ui/Heading";
import { getTranslations } from "next-intl/server";

async function HomePage() {
  const t = await getTranslations("HomePage");

  return (
    <div className="py-2">
      <Heading>{t("title")}</Heading>
    </div>
  );
}

export default HomePage;
