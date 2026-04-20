import { SwitchLang } from "@/shared/ui/SwitchLang";
import { HeaderContact } from "@/widgets/HeaderContact";
import { HeaderMenu } from "@/widgets/HeaderMenu";
import { Menu } from "lucide-react";

function HeaderDraweMenu() {
  return (
    <div className="drawer">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-1"
          className="btn p-10 bg-primary-350 text-secondary-300 border-0"
        >
          <Menu size={18} strokeWidth={2} />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-1"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu min-h-full w-80 p-4 bg-white">
          <HeaderMenu />
          <SwitchLang />
          <HeaderContact />
        </div>
      </div>
    </div>
  );
}

export default HeaderDraweMenu;
