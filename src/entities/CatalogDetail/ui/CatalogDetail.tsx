import { ICatalogDetail } from "../types";
import CatalogImages from "./CatalogImages/CatalogImages";
import CatalogInfo from "./CatalogInfo/CatalogInfo";
import CatalogTitle from "./CatalogTitle/CatalogTitle";

interface IProps {
  data: ICatalogDetail;
}

function CatalogDetail(props: IProps) {
  const { data } = props;
  const { title, images } = data;

  return (
    <div>
      <CatalogTitle title={title} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <CatalogImages data={images} />
        <CatalogInfo {...data} />
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  );
}

export default CatalogDetail;
