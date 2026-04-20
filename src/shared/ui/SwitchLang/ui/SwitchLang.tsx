"use client";
import { useRouter, usePathname } from "@/i18n/navigation";
import { ChevronDown } from "lucide-react";
import { Description } from "../../Description";
import { clsx } from "@/shared/lib/clsx";
import { useLocale } from "next-intl";
import { langs } from "../model/lang-items";

function SwitchLang() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  function onSelectChange(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <details className="dropdown">
      <summary className="btn m-1 flex items-center justify-between gap-2">
        {langs[locale as keyof typeof langs].label}
        <ChevronDown size={16} strokeWidth={2} />
      </summary>

      <ul className="menu dropdown-content bg-base-100 relative md:absolute rounded-box w-full md:w-52 p-2 shadow-sm">
        {Object.values(langs).map((el) => (
          <li key={el.value} onClick={() => onSelectChange(el.value)}>
            <Description
              variyant="small"
              className={clsx(["flex items-center gap-2"], {
                "bg-light-gray-150 font-bold!": locale === el.value,
              })}
            >
              {el.icon} {el.label}
            </Description>
          </li>
        ))}
      </ul>
    </details>
  );
}

export default SwitchLang;
