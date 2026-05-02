import { formatDate } from "@/shared/lib/formatDate/formatDate";
import { Description } from "@/shared/ui/Description";
import { ExpandableText } from "@/shared/ui/ExpandableText";
import { Rating } from "@/shared/ui/Rating";
import { Title } from "@/shared/ui/Title";
import { FaYoutube } from "react-icons/fa";
import { FcClock } from "react-icons/fc";

interface IProps {
  userName: string;
  email: string;
  rating: number;
  comment: string;
  videoUrl: null | string;
  createdAt: string;
  onShowModal: (url: string) => void;
}

function CatalogReviewSwiperItem(props: IProps) {
  const { userName, email, rating, comment, videoUrl, createdAt, onShowModal } =
    props;

  return (
    <div className="bg-white border border-light-gray-250 rounded-6 p-20 relative overflow-hidden">
      {videoUrl && (
        <span
          className="shadow inline-flex items-center justify-center bg-white absolute top-0 right-0 rounded-bl-6 py-10 px-15 cursor-pointer hover:bg-light-gray-100"
          onClick={() => onShowModal(videoUrl)}
        >
          <FaYoutube size={30} className="text-red-600" />
        </span>
      )}

      <div className="mb-20">
        <Title variyant="medium">{userName}</Title>
        <Description variyant="medium" className="my-10">
          {email}
        </Description>
        <Description variyant="medium" className="flex items-center gap-5">
          <FcClock /> {formatDate(createdAt)}
        </Description>
      </div>

      <div className="flex gap-10 items-center mb-15 md:mb-20">
        <div className="w-[40] h-[40] inline-flex items-center justify-center rounded-full bg-primary-300 text-secondary-300 shadow">
          <Description variyant="large">{rating}</Description>
        </div>
        <Rating value={rating} className="mb-5" />
      </div>

      <div>
        <Description variyant="medium">
          <ExpandableText text={comment} />
        </Description>
      </div>
    </div>
  );
}

export default CatalogReviewSwiperItem;
