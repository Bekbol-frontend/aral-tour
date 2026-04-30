import { Description } from "@/shared/ui/Description";
import { Heading } from "@/shared/ui/Heading";
import { Rating } from "@/shared/ui/Rating";
import { Title } from "@/shared/ui/Title";
import { getTranslations } from "next-intl/server";
import { FaEye } from "react-icons/fa";

interface IProps {
  slogan: string;
  duration_days: number;
  duration_nights: number;
  rating: number;
  reviews_count: number;
  price: number;
  max_people: number;
  min_age: number;
  routes: string;
}

async function CatalogInfo(props: IProps) {
  const t = await getTranslations("TourCard");

  const {
    slogan,
    duration_days,
    duration_nights,
    rating,
    reviews_count,
    price,
    max_people,
    min_age,
    routes,
  } = props;

  return (
    <div>
      <Heading variyant="small">{slogan}</Heading>

      <div className="bg-light-gray-200 inline-flex py-5 px-20 rounded-6 my-15 md:my-20">
        <Description variyant="medium">
          {duration_days} {t("day")}{" "}
          {duration_nights > 0 ? (
            <>
              {"/"} {duration_nights} {t("night")}
            </>
          ) : null}
        </Description>
      </div>

      <div className="mb-15 md:mb-20 flex items-center gap-20">
        <div className="flex gap-10 items-center">
          <div className="w-[40] h-[40] inline-flex items-center justify-center rounded-full bg-primary-300 text-secondary-300 shadow">
            <Description variyant="large">{rating}</Description>
          </div>
          <div className="flex flex-col">
            <Rating value={rating} />
          </div>
        </div>

        <Description variyant="medium" className="flex items-center gap-5">
          <FaEye size={20} /> {`(${reviews_count})`} {t("reviews")}
        </Description>
      </div>

      <div>
        <Heading variyant="medium" className="mb-5">
          {t("from")} {price} $
        </Heading>
        <Description className="text-gray-250">
          *Цена зависит от количества человек в группе.
        </Description>
      </div>
    </div>
  );
}

export default CatalogInfo;
