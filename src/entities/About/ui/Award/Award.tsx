import { getTranslations } from "next-intl/server";
import { IAboutAward } from "../../model/types";
import { Heading } from "@/shared/ui/Heading";
import { Description } from "@/shared/ui/Description";
import AwardItems from "./AwardItems/AwardItems";

interface IProps {
  data: IAboutAward;
}

async function Award({ data }: IProps) {
  const t = await getTranslations("About");

  return (
    <div>
      <div className="text-center mb-40">
        <Heading className="mb-20 text-primary-400">{t("Award")}</Heading>
        <Description className="text-gray-250">{data.description}</Description>
      </div>

      <AwardItems data={data.images} />
    </div>
  );
}

export default Award;
