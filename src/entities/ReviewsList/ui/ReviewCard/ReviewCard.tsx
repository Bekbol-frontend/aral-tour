import { Description } from "@/shared/ui/Description";
import { ExpandableText } from "@/shared/ui/ExpandableText";
import { Rating } from "@/shared/ui/Rating";
import { Title } from "@/shared/ui/Title";
import { FaYoutube } from "react-icons/fa";

interface IProps {
  onShowModal: (url: string) => void;
  videoUrl: string;
  userName: string;
  rating: number;
  city: string;
  title: string;
  comment: string;
}

function ReviewCard(props: IProps) {
  const { onShowModal, videoUrl, userName, rating, city, title, comment } =
    props;

  return (
    <div className="h-full! border-[1] border-light-gray-250 rounded-6 p-20 relative overflow-hidden bg-white">
      <span
        className="shadow inline-flex items-center justify-center bg-white absolute top-0 right-0 rounded-bl-6 py-10 px-15 cursor-pointer hover:bg-light-gray-100"
        onClick={() => onShowModal(videoUrl)}
      >
        <FaYoutube size={30} className="text-red-600" />
      </span>
      <div className="mb-30">
        <Title variyant="small" className="text-secondary-300">
          {userName}
        </Title>
        <div className="flex items-center gap-15 my-15">
          <span className="inline-flex items-center justify-center rounded-full w-[35] h-[35] bg-primary-350 text-secondary-300 text-description-large shadow">
            {rating}
          </span>
          <Rating value={rating} />
        </div>
        <Title variyant="medium" className="text-gray-100">
          {city}
        </Title>
      </div>
      <div>
        <span className="bg-secondary-50 py-5 px-10 rounded-6 text-description-small md:text-description-large font-semibold mb-20 inline-flex">
          {title}
        </span>
        <Description variyant="medium">
          <ExpandableText text={comment} />
        </Description>
      </div>
    </div>
  );
}

export default ReviewCard;
