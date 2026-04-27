"use client";

import { appRoutes } from "@/shared/config/route";
import { Heading } from "@/shared/ui/Heading";
import { Title } from "@/shared/ui/Title";
import { useTranslations } from "next-intl";
import Link from "next/link";

function NotFoundPage() {
  const t = useTranslations("NotFoundPage");

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-20 md:p-40">
      <Heading>404</Heading>
      <Title className="mb-20">{t("Page not found")}</Title>
      <Link href={appRoutes.home} className="btn bg-secondary-350 text-white">
        {t("Home page")}
      </Link>
    </div>
  );
}

export default NotFoundPage;
