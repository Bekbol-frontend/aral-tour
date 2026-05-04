import { Contact } from "@/entities/Contact";
import { ICatalogDetail } from "../model/types";
import CatalogImages from "./CatalogImages/CatalogImages";
import CatalogInfo from "./CatalogInfo/CatalogInfo";
import CatalogReview from "./CatalogReview/CatalogReview";
import CatalogTitle from "./CatalogTitle/CatalogTitle";
import ImportantInformation from "./ImportantInformation/ImportantInformation";
import ShortDesc from "./ShortDesc/ShortDesc";
import TourFeatures from "./TourFeatures/TourFeatures";
import TourProgram from "./TourProgram/TourProgram";
import CatalogFAQ from "./CatalogFAQ/CatalogFAQ";
import { Section } from "@/shared/ui/Section";
import { Container } from "@/shared/ui/Container";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";

interface IProps {
  data: ICatalogDetail;
}

function CatalogDetail(props: IProps) {
  const { data } = props;
  const {
    title,
    images,
    important_info,
    description,
    itineraries,
    features,
    id,
    reviews,
    faq,
  } = data;

  return (
    <>
      <Section className="pb-0! bg-white!">
        <Container>
          <Breadcrumbs />

          <CatalogTitle title={title} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-30 mb-40">
            <CatalogImages data={images} />
            <CatalogInfo {...data} />
            <ImportantInformation importantInfo={important_info} />
            <ShortDesc description={description} />
            <TourProgram itineraries={itineraries} />
            <TourFeatures features={features} />
          </div>

          <CatalogReview tourId={id} catalogReview={reviews} />
        </Container>
      </Section>
      <CatalogFAQ data={faq} />
      <Contact />
    </>
  );
}

export default CatalogDetail;
