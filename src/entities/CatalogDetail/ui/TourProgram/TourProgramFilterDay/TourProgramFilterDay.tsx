"use client";

import { IItineraries } from "@/entities/CatalogDetail/types";
import { clsx } from "@/shared/lib/clsx";
import { Description } from "@/shared/ui/Description";
import { Title } from "@/shared/ui/Title";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { FcClock } from "react-icons/fc";

interface IProps {
  itineraries: IItineraries[];
}

function TourProgramFilterDay({ itineraries }: IProps) {
  const [activeDay, setActiveDay] = useState(1);
  const t = useTranslations("TourCard");

  const handleActiveDay = (day: number) => {
    setActiveDay(day);
  };

  const days = useMemo(() => {
    const dayRes = itineraries.map((item) => item.day_number);
    return Array.from(new Set(dayRes));
  }, [itineraries]);

  const filterProgramDay = useMemo(() => {
    return itineraries.filter((el) => el.day_number === activeDay);
  }, [itineraries, activeDay]);

  return (
    <div>
      <div className="flex gap-5 mb-30">
        {days.map((el) => (
          <button
            className={clsx(["btn"], {
              "bg-secondary-350 text-primary-300": activeDay === el,
            })}
            key={el}
            onClick={() => handleActiveDay(el)}
          >{`${t("day")} ${el}`}</button>
        ))}
      </div>
      <div className="flex flex-col gap-20 md:gap-30">
        {filterProgramDay.map((el, index) => (
          <div
            className="flex flex-col md:flex-row gap-10 pb-20 md:p-0 border-b md:border-none border-light-gray-200 last:border-none"
            key={index}
          >
            <span className="text-description-large font-bold inline-flex items-center gap-5 bg-white shadow p-10 rounded-6 self-start">
              <FcClock />
              {el.event_time.slice(0, 5)}
            </span>
            <div className="bg-white border border-light-gray-200 p-15 rounded-6">
              <Title variyant="medium" className="mb-5">
                {el.activity_title}
              </Title>
              <Description variyant="medium">
                {el.activity_description}
              </Description>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TourProgramFilterDay;
