import { Description } from "@/shared/ui/Description";
import { classBlock } from "../../model/classBlock";
import { Heading } from "@/shared/ui/Heading";
import { getTranslations } from "next-intl/server";

interface IProps {
  description: string;
}

async function ShortDesc({ description }: IProps) {
  const t = await getTranslations("TourCard");

  return (
    <div className={classBlock}>
      <Heading variyant="medium" className="mb-15">
        {t("Brief description")}
      </Heading>
      <Description className="text-gray-200">{description}</Description>
    </div>
  );
}

export default ShortDesc;
