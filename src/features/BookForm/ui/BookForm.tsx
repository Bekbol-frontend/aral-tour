import { clsx } from "@/shared/lib/clsx";
import { useState } from "react";

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

      <div className="p-4">
        {activeTab === 0 && <div className="">Content for Tab 1</div>}
        {activeTab === 1 && <div className="">Content for Tab 2</div>}
      </div>
    </div>
  );
}

export default BookForm;
