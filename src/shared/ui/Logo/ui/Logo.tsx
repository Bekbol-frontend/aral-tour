import { Link } from "@/i18n/navigation";
import { appRoutes } from "@/shared/config/route";
import Image from "next/image";

function Logo() {
  return (
    <Link
      href={appRoutes.home}
      className="inline-flex items-center justify-center"
    >
      <Image
        src="/logo.svg"
        alt="aral"
        width={110}
        height={110}
        className="w-[80px] h-[80px] md:w-[110] md:h-[110]"
        priority
      />
    </Link>
  );
}

export default Logo;
