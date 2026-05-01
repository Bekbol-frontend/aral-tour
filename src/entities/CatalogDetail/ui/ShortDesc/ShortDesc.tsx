import { Description } from "@/shared/ui/Description";
import { classBlock } from "../../classBlock";
import { Heading } from "@/shared/ui/Heading";

interface IProps {
  description: string;
}

function ShortDesc({ description }: IProps) {
  return (
    <div className={classBlock}>
      <Heading variyant="medium" className="mb-15">
        Краткое описание
      </Heading>
      <Description className="text-gray-200">{description}</Description>
    </div>
  );
}

export default ShortDesc;
