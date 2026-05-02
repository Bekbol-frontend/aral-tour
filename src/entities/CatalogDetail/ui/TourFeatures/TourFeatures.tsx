"use client";

import { useMemo } from "react";
import { Heading } from "@/shared/ui/Heading";
import { classBlock } from "../../model/classBlock";
import { ITourFeatures } from "../../model/types";
import TourFeaturesItem from "./TourFeaturesItem/TourFeaturesItem";

interface IProps {
  features: ITourFeatures[];
}

function TourFeatures({ features }: IProps) {
  const includedFeatures = useMemo(
    () => features.filter((feature) => feature.is_included),
    [features],
  );

  const notIncludedFeatures = useMemo(
    () => features.filter((feature) => feature.is_included === false),
    [features],
  );

  return (
    <div className={classBlock}>
      <div className="mb-30">
        <Heading variyant="medium" className="mb-15">
          В стоимость входит
        </Heading>

        <div className="flex flex-col gap-20">
          {includedFeatures.map((el) => (
            <TourFeaturesItem key={el.id} data={el} />
          ))}
        </div>
      </div>

      <div>
        <Heading variyant="medium" className="mb-15">
          Не входит
        </Heading>

        <div className="flex flex-col gap-20">
          {notIncludedFeatures.map((el) => (
            <TourFeaturesItem key={el.id} data={el} notIncluded />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TourFeatures;
