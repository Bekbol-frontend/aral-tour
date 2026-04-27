import { usePathname } from "@/i18n/navigation";
import { clsx } from "@/shared/lib/clsx";
import { menuItems } from "@/widgets/HeaderMenu/menu-items";
import { useTranslations } from "next-intl";
import Link from "next/link";

function FooterMenu() {
  const t = useTranslations("HeaderMenu");

  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-[7] md:gap-5">
      {menuItems.map((el) => (
        <Link
          href={el.path}
          key={el.path}
          className={clsx(["text-description-large hover:text-primary-200"], {
            "text-primary-200": pathname === el.path,
          })}
        >
          {t(el.name)}
        </Link>
      ))}
    </div>
  );
}

export default FooterMenu;
