"use client";

import { ICategory } from "../../models/types";
import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { clsx } from "@/shared/lib/clsx";
import styles from "./CatalogCategories.module.css";
import { useTranslations } from "next-intl";

interface IProps {
  data: ICategory[];
  category: string | string[] | undefined;
}

function CatalogCategories({ data, category }: IProps) {
  const t = useTranslations("Catalog");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearchParams = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("category", value);
    } else {
      params.delete("category");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mb-30 mx-auto max-w-[1200]">
      <div className="flex md:justify-center gap-10 overflow-auto pb-10 px-10">
        <button
          className={clsx(["btn bg-base-border"], {
            "bg-secondary-350 text-white": !category,
          })}
          onClick={() => handleSearchParams("")}
        >
          {t("All")}
        </button>
        {data.map((el) => (
          <button
            className={clsx(["btn bg-base-border"], {
              "bg-secondary-350 text-white": category
                ? +category === el.id
                : false,
            })}
            key={el.id}
            onClick={() => handleSearchParams(`${el.id}`)}
          >
            {el.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CatalogCategories;
