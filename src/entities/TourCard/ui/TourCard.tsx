import { env } from "@/shared/config/env";
import Image from "next/image";

interface IProps {
  imgUrl: string;
}

function TourCard(props: IProps) {
  const { imgUrl } = props;

  return (
    <div className="border-[1] border-base-border rounded-15 p-5">
      <div className="h-[300] md:h-[470] rounded-10 overflow-hidden">
        <Image
          src={`${env.baseUrl}${imgUrl}`}
          alt=""
          width={470}
          height={470}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          temporibus tempora, molestiae illo ex ratione accusantium unde nam?
          Quidem, fugiat.
        </p>
      </div>
    </div>
  );
}

export default TourCard;
