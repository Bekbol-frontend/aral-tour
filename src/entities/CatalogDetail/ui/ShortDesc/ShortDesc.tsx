import { Description } from "@/shared/ui/Description";
import { Title } from "@/shared/ui/Title";
import { classBlock } from "../../classBlock";

interface IProps {
  description: string;
}

function ShortDesc({ description }: IProps) {
  return (
    <div className={classBlock}>
      <Title className="mb-10">Краткое описание</Title>
      <Description className="text-gray-250">{description}</Description>
    </div>
  );
}

export default ShortDesc;
