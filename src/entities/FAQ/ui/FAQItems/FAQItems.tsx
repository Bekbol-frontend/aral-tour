import { Description } from "@/shared/ui/Description";
import { IFAQ } from "../../model/types";

interface IProps {
  data: IFAQ[];
}

function FAQItems({ data }: IProps) {
  return (
    <div className="flex flex-col gap-10">
      {data.map((el) => (
        <details
          key={el.id}
          className="collapse collapse-plus border-2 border-base-border bg-white"
        >
          <summary className="collapse-title">
            <Description>{el.question}</Description>
          </summary>
          <div className="collapse-content">
            <Description variyant="medium">{el.answer}</Description>
          </div>
        </details>
      ))}
    </div>
  );
}

export default FAQItems;
