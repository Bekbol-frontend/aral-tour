"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { menuItems } from "../menu-items";
import { clsx } from "@/shared/lib/clsx";

function HeaderMenu() {
  const pathname = usePathname();

  return (
    <div className="flex gap-5 md:gap-15 flex-col md:flex-row">
      {menuItems.map((el) => (
        <Link
          href={el.path}
          key={el.path}
          className={clsx(
            [
              `p-10 md:py-1.5 md:px-3 rounded-6 font-medium text-description-medium transition text-gray-250 hover:bg-light-gray-100`,
            ],
            {
              "bg-light-gray-100 font-semibold": el.path === pathname,
            },
          )}
        >
          {el.name}
        </Link>
      ))}
    </div>
  );
}

export default HeaderMenu;
