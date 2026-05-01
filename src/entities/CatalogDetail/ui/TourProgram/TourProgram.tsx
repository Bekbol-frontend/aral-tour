import { IItineraries } from "../../types";
import TourProgramFilterDay from "./TourProgramFilterDay/TourProgramFilterDay";
import { classBlock } from "../../classBlock";
import { Heading } from "@/shared/ui/Heading";

interface IProps {
  itineraries: IItineraries[];
}

function TourProgram({ itineraries }: IProps) {
  return (
    <div className={classBlock}>
      <Heading variyant="medium" className="mb-15">
        Программа тура
      </Heading>
      <TourProgramFilterDay itineraries={itineraries} />
    </div>
  );
}

export default TourProgram;
