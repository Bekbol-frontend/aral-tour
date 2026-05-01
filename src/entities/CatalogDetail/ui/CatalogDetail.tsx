import { ICatalogDetail } from "../types";
import CatalogImages from "./CatalogImages/CatalogImages";
import CatalogInfo from "./CatalogInfo/CatalogInfo";
import CatalogTitle from "./CatalogTitle/CatalogTitle";
import ImportantInformation from "./ImportantInformation/ImportantInformation";
import ShortDesc from "./ShortDesc/ShortDesc";

interface IProps {
  data: ICatalogDetail;
}

function CatalogDetail(props: IProps) {
  const { data } = props;
  const { title, images, important_info, description } = data;

  return (
    <div>
      <CatalogTitle title={title} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <CatalogImages data={images} />
        <CatalogInfo {...data} />
        <ImportantInformation importantInfo={important_info} />
        <ShortDesc description={description} />
      </div>
    </div>
  );
}

export default CatalogDetail;
