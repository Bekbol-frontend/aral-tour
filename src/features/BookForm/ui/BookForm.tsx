import { clsx } from "@/shared/lib/clsx";
import { useState } from "react";
import BookFormBlock from "./BookFormBlock/BookFormBlock";
import QuestionFormBlock from "./QuestionFormBlock/QuestionFormBlock";

function BookForm() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div role="tablist" className="tabs flex gap-5">
        <button
          className={clsx(["tab btn shadow-none"], {
            "bg-secondary-350 text-primary-300": activeTab === 0,
          })}
          onClick={() => setActiveTab(0)}
        >
          Вопрос
        </button>
        <button
          className={clsx(["tab btn shadow-none"], {
            "bg-secondary-350 text-primary-300": activeTab === 1,
          })}
          onClick={() => setActiveTab(1)}
        >
          Бронирование
        </button>
      </div>

      <div className="pt-20">
        {activeTab === 0 ? <QuestionFormBlock /> : <BookFormBlock />}
      </div>
    </div>
  );
}

export default BookForm;
