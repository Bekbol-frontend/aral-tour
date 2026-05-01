import { Title } from "@/shared/ui/Title";
import DOMPurify from "isomorphic-dompurify";
import { classBlock } from "../../classBlock";

interface IProps {
  importantInfo: string;
}

function ImportantInformation({ importantInfo }: IProps) {
  const cleanHTML = DOMPurify.sanitize(importantInfo);

  return (
    <div className={classBlock}>
      <Title className="mb-10">Важная информация</Title>

      <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />
    </div>
  );
}

export default ImportantInformation;
