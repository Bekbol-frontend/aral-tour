import { IItineraries } from "../../model/types";
import TourProgramFilterDay from "./TourProgramFilterDay/TourProgramFilterDay";
import { classBlock } from "../../model/classBlock";
import { Heading } from "@/shared/ui/Heading";
import { getTranslations } from "next-intl/server";

interface IProps {
  itineraries: IItineraries[];
}

async function TourProgram({ itineraries }: IProps) {
  const t = await getTranslations("TourCard");

  return (
    <div className={classBlock}>
      <Heading variyant="medium" className="mb-15">
        {t("Tour program")}
      </Heading>
      <TourProgramFilterDay itineraries={itineraries} />
    </div>
  );
}

export default TourProgram;
