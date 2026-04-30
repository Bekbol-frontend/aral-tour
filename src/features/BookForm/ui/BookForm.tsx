"use client";

import { clsx } from "@/shared/lib/clsx";
import { useState } from "react";
import BookFormBlock from "./BookFormBlock/BookFormBlock";
import QuestionFormBlock from "./QuestionFormBlock/QuestionFormBlock";
import { useTranslations } from "next-intl";

function BookForm() {
  const [activeTab, setActiveTab] = useState(0);

  const t = useTranslations("BookForm");

  return (
    <div>
      <div role="tablist" className="tabs flex gap-5">
        <button
          className={clsx(["tab btn shadow-none"], {
            "bg-secondary-350 text-primary-300": activeTab === 0,
          })}
          onClick={() => setActiveTab(0)}
        >
          {t("Question")}
        </button>
        <button
          className={clsx(["tab btn shadow-none"], {
            "bg-secondary-350 text-primary-300": activeTab === 1,
          })}
          onClick={() => setActiveTab(1)}
        >
          {t("Book")}
        </button>
      </div>

      <div className="pt-20">
        {activeTab === 0 ? <QuestionFormBlock /> : <BookFormBlock />}
      </div>
    </div>
  );
}

export default BookForm;
