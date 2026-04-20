import { SwitchLang } from "@/shared/ui/SwitchLang";
import { HeaderContact } from "@/widgets/HeaderContact";
import { HeaderMenu } from "@/widgets/HeaderMenu";
import { Menu } from "lucide-react";

export const ID_DRAWER_MENU = "header-menu-drawer";

function HeaderDraweMenu() {
  return (
    <div className="drawer">
      <input id={ID_DRAWER_MENU} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor={ID_DRAWER_MENU}
          className="btn p-10 bg-primary-350 text-secondary-300 border-0"
        >
          <Menu size={18} strokeWidth={2} />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor={ID_DRAWER_MENU}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu min-h-full w-80 p-4 bg-white">
          <HeaderMenu htmlFor={ID_DRAWER_MENU} />

          <SwitchLang />
          <HeaderContact />
        </div>
      </div>
    </div>
  );
}

export default HeaderDraweMenu;
