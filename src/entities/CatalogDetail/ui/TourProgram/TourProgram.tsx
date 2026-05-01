import { Title } from "@/shared/ui/Title";
import { IItineraries } from "../../types";
import TourProgramFilterDay from "./TourProgramFilterDay/TourProgramFilterDay";
import { classBlock } from "../../classBlock";

interface IProps {
  itineraries: IItineraries[];
}

function TourProgram({ itineraries }: IProps) {
  return (
    <div className={classBlock}>
      <Title className="mb-20">Программа тура</Title>
      <TourProgramFilterDay itineraries={itineraries} />
    </div>
  );
}

export default TourProgram;
