import { Heading } from "@/shared/ui/Heading";

interface IProps {
  title: string;
}

function CatalogTitle({ title }: IProps) {
  return (
    <div className="mb-30">
      <Heading>{title}</Heading>
    </div>
  );
}

export default CatalogTitle;
