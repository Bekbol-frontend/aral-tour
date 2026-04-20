"use client";

import { Heading } from "@/shared/ui/Heading";
import { Title } from "@/shared/ui/Title";
import { useTranslations } from "next-intl";

function NotFoundPage() {
  const t = useTranslations("NotFoundPage");

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-20 md:p-40">
      <Heading>404</Heading>
      <Title>{t("Page not found")}</Title>
    </div>
  );
}

export default NotFoundPage;
