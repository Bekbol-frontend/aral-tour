"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { appRoutes } from "@/shared/config/route";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

const INDEX_CONST = "/";
const classNameLink = "text-description-small font-semibold";

function Breadcrumbs() {
  const t = useTranslations("HeaderMenu");
  const pathname = usePathname();

  const segments = useMemo(
    () => pathname.split(INDEX_CONST).filter(Boolean),
    [pathname],
  );

  const paths = useMemo(
    () =>
      segments.map((el, index) => {
        const href =
          INDEX_CONST + segments.slice(0, index + 1).join(INDEX_CONST);

        return {
          name: decodeURIComponent(el),
          href,
        };
      }),
    [segments],
  );

  return (
    <div className="mb-20 w-full overflow-hidden">
      <div className="overflow-x-auto w-full! whitespace-nowrap pb-5">
        <Link href={appRoutes.home} className={classNameLink}>
          {t("Home page")}
        </Link>

        {paths.map((item, index) => {
          const isLast = index === paths.length - 1;

          return (
            <span key={index}>
              {" / "}
              {isLast ? (
                <span className={classNameLink}>{item.name}</span>
              ) : (
                <Link href={item.href} className={classNameLink}>
                  {t(item.name)}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Breadcrumbs;
