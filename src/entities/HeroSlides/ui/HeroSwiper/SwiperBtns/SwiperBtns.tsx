"use client";

import { Link } from "@/i18n/navigation";
import { appRoutes } from "@/shared/config/route";
import { BookModal } from "@/shared/ui/BookModal";
import { useTranslations } from "next-intl";
import { useState } from "react";

function SwiperBtns() {
  const [modal, setModal] = useState(false);

  const t = useTranslations("HeroSwiper");

  const onShowModal = () => {
    setModal(true);
  };

  const onCloseModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="flex justify-center gap-[7] md:gap-10 flex-col md:flex-row">
        <Link
          href={appRoutes.catalog}
          className="btn shadow-none border-none bg-secondary-350 text-white"
        >
          {t("Pick a tour")}
        </Link>
        <button
          className="btn border-none shadow-none bg-primary-350 text-secondary-350"
          onClick={onShowModal}
        >
          {t("Book hostel")}
        </button>
      </div>

      <BookModal open={modal} onClose={onCloseModal} />
    </>
  );
}

export default SwiperBtns;
