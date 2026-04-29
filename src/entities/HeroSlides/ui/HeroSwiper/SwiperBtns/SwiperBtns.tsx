import { Link } from "@/i18n/navigation";
import { appRoutes } from "@/shared/config/route";

function SwiperBtns() {
  return (
    <div>
      <Link
        href={appRoutes.catalog}
        className="btn shadow-none border-none bg-secondary-350 text-white"
      >
        Подобрать тур
      </Link>
    </div>
  );
}

export default SwiperBtns;
