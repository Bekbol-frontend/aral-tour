"use client";

import { Link } from "@/i18n/navigation";
import { appRoutes } from "@/shared/config/route";
import { BookModal } from "@/shared/ui/BookModal";
import { useCallback, useState } from "react";

function SwiperBtns() {
  const [modal, setModal] = useState(false);

  const onShowModal = () => {
    setModal(true);
  };

  const onCloseModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="flex justify-center gap-5 md:gap-15 flex-col md:flex-row">
        <Link
          href={appRoutes.catalog}
          className="btn shadow-none border-none bg-secondary-350 text-white"
        >
          Подобрать тур
        </Link>
        <button
          className="btn border-none shadow-none bg-primary-350 text-secondary-350"
          onClick={onShowModal}
        >
          Зобранировать хостел
        </button>
      </div>

      <BookModal open={modal} onClose={onCloseModal} />
    </>
  );
}

export default SwiperBtns;
