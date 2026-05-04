import { appRoutes } from "@/shared/config/route";
import { webUrl } from "@/shared/constants/web.url";
import { langs } from "@/shared/types/lang";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    appRoutes.home,
    appRoutes.about,
    appRoutes.catalog,
    appRoutes.contact,
    appRoutes.review,
  ];

  const pages = routes.flatMap((route) =>
    langs.map((locale) => ({
      url:
        route === appRoutes.home
          ? `${webUrl}/${locale}`
          : `${webUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority:
        route === appRoutes.home ? 1 : route === appRoutes.catalog ? 0.9 : 0.7,
    })),
  );

  return pages;
}
