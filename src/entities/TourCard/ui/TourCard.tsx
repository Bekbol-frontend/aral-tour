import { env } from "@/shared/config/env";
import { appRoutes } from "@/shared/config/route";
import { Description } from "@/shared/ui/Description";
import { Rating } from "@/shared/ui/Rating";
import { Title } from "@/shared/ui/Title";
import { ChevronRight, Eye } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  imgUrl: string;
  title: string;
  duration_days: number;
  duration_nights: number;
  rating: number;
  reviews_count: number;
  slogan: string;
  price: number;
  phone: string;
}

async function TourCard(props: IProps) {
  const t = await getTranslations("TourCard");

  const {
    imgUrl,
    title,
    duration_days,
    duration_nights,
    rating,
    reviews_count,
    slogan,
    price,
    phone,
  } = props;

  return (
    <div className="border-[1] border-base-border rounded-15 p-5">
      <div className="h-[280] md:h-[280] rounded-10 overflow-hidden">
        <Image
          src={`${env.baseUrl}${imgUrl}`}
          alt={title}
          width={470}
          height={470}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="py-20 px-15">
        <Title
          variyant="small"
          className="overflow-hidden line-clamp-1 webkit-line-clamp-1 text-ellipsis"
        >
          {title}
        </Title>

        <div className="bg-light-gray-200 my-15 md:my-20 inline-flex py-5 px-20 rounded-6">
          <Description variyant="medium">
            {duration_days} {t("day")}{" "}
            {duration_nights > 0 ? (
              <>
                {"/"} {duration_nights} {t("night")}
              </>
            ) : null}
          </Description>
        </div>

        <div className="flex gap-10 items-center mb-15 md:mb-20 border-b-[1] border-light-gray-250 py-10">
          <div className="w-[40] h-[40] inline-flex items-center justify-center rounded-full bg-primary-300 text-secondary-300 shadow">
            <Description variyant="large">{rating}</Description>
          </div>
          <div className="flex flex-col">
            <Rating value={rating} className="mb-5" />
            <Description variyant="medium" className="flex items-center gap-5">
              <Eye size={20} strokeWidth={2} /> {`(${reviews_count})`}{" "}
              {t("reviews")}
            </Description>
          </div>
        </div>

        <Description className="overflow-hidden line-clamp-1 webkit-line-clamp-1 text-ellipsis mb-15">
          {slogan}
        </Description>

        <Title className="mb-15 font-extra-bold!">
          {t("from")} {price} $
        </Title>

        <div className="flex items-center justify-between gap-10 flex-col md:flex-row">
          <div className="flex gap-10">
            <button className="btn bg-primary-300 text-secondary-300">
              {t("Book")}
            </button>
            <a href={`tel:${phone}`} className="btn">
              {phone}
            </a>
          </div>
          <Link
            href={appRoutes.home}
            className="btn bg-secondary-300 text-primary-300 p-10 w-full md:w-auto flex md:inline-flex"
          >
            <Description className="block md:hidden">
              {t("Show more")}
            </Description>
            <ChevronRight className="hidden md:inline-flex" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
