import { ITourFeatures } from "@/entities/CatalogDetail/types";
import { clsx } from "@/shared/lib/clsx";
import { Description } from "@/shared/ui/Description";

interface IProps {
  data: ITourFeatures;
  notIncluded?: boolean;
}

function TourFeaturesItem({ data, notIncluded = false }: IProps) {
  return (
    <div className="flex gap-15 border-b md:border-none border-light-gray-250 pb-20 md:pb-0 last:border-none!">
      <div
        className={clsx(
          [
            "flex items-center justify-center self-start min-w-[40]! min-h-[40]! w-[40]! h-[40]! border border-secondary-200 text-secondary-250 rounded-6",
          ],
          {
            "border-error! text-error!": notIncluded,
          },
        )}
      >
        <span className={`${data.icon} inline-flex!`} />
      </div>
      <div>
        <Description className="mb-5">{data.description}</Description>
        <Description variyant="medium" className="text-gray-150">
          {data.name}
        </Description>
      </div>
    </div>
  );
}

export default TourFeaturesItem;
