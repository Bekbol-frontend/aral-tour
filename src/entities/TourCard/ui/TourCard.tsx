import { env } from "@/shared/config/env";
import { Description } from "@/shared/ui/Description";
import { Rating } from "@/shared/ui/Rating";
import { Title } from "@/shared/ui/Title";
import { Eye } from "lucide-react";
import Image from "next/image";

interface IProps {
  imgUrl: string;
  title: string;
  duration_days: number;
  duration_nights: number;
  rating: number;
  reviews_count: number;
}

function TourCard(props: IProps) {
  const {
    imgUrl,
    title,
    duration_days,
    duration_nights,
    rating,
    reviews_count,
  } = props;

  return (
    <div className="border-[1] border-base-border rounded-15 p-5">
      <div className="h-[280] md:h-[380] rounded-10 overflow-hidden">
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
          className="overflow-hidden line-clamp-1 webkit-line-clamp-"
        >
          {title}
        </Title>
        <div className="badge badge-ghost bg-base-border my-10 md:my-20">
          <Description>{duration_days} days</Description> /{" "}
          <Description>{duration_nights} nights</Description>
        </div>

        <div className="flex gap-20 items-center">
          <div className="w-[40] h-[40] inline-flex items-center justify-center rounded-full bg-primary-300 text-secondary-300 shadow">
            <Description variyant="large">{rating}</Description>
          </div>
          <div className="flex flex-col">
            <Rating value={rating} className="mb-5" />
            <Description variyant="medium" className="flex items-center gap-5">
              <Eye size={20} strokeWidth={2} /> {`(${reviews_count})`}{" "}
              просмотров
            </Description>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
