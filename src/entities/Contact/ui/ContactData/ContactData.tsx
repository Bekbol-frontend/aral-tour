import { IContact } from "@/shared/types/contact";
import { Description } from "@/shared/ui/Description";
import {
  FaWhatsapp,
  FaMapMarked,
  FaInstagram,
  FaPhone,
  FaTelegram,
  FaFacebook,
} from "react-icons/fa";

const ITEM_CLASS =
  "flex items-center gap-15 relative border-b md:border-none border-light-gray-250 pb-20 last:border-0";
const CLASS_ICON_SPAN =
  "inline-flex items-center justify-center rounded-full shadow w-[43] h-[43] min-w-[43] min-h-[43]";

interface IProps {
  data: IContact;
}

function ContactData({ data }: IProps) {
  const {
    address,
    whatsapp_phone,
    instagram_url,
    instagram_username,
    phone,
    telegram_url,
    telegram_username,
    facebook_url,
    facebook_name,
  } = data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-20">
      <div className={ITEM_CLASS}>
        <span
          className={`${CLASS_ICON_SPAN} text-secondary-300 bg-primary-300`}
        >
          <FaMapMarked size={20} />
        </span>
        <Description variyant="medium">{address}</Description>
      </div>

      <div className={ITEM_CLASS}>
        <span
          className={`${CLASS_ICON_SPAN} text-secondary-400 bg-secondary-150`}
        >
          <FaWhatsapp size={20} />
        </span>
        <Description variyant="medium">{whatsapp_phone}</Description>
        <a
          href={`https://wa.me/${whatsapp_phone}`}
          target="_blank"
          className={`absolute inset-0`}
        />
      </div>

      <div className={ITEM_CLASS}>
        <span className={`${CLASS_ICON_SPAN} text-white bg-secondary-450`}>
          <FaInstagram size={20} />
        </span>
        <Description variyant="medium">{instagram_username}</Description>
        <a
          href={`https://instagram.com/${instagram_url}`}
          target="_blank"
          className={`absolute inset-0`}
        />
      </div>

      <div className={ITEM_CLASS}>
        <span
          className={`${CLASS_ICON_SPAN} text-secondary-450 bg-primary-300`}
        >
          <FaPhone size={20} />
        </span>
        <Description variyant="medium">{phone}</Description>
        <a href={`tel:${phone}`} className={`absolute inset-0`} />
      </div>

      <div className={ITEM_CLASS}>
        <span className={`${CLASS_ICON_SPAN} text-white bg-secondary-400`}>
          <FaTelegram size={20} />
        </span>
        <Description variyant="medium">{telegram_username}</Description>
        <a href={telegram_url} target="_blank" className={`absolute inset-0`} />
      </div>

      <div className={ITEM_CLASS}>
        <span
          className={`${CLASS_ICON_SPAN} text-secondary-400 bg-secondary-100`}
        >
          <FaFacebook size={20} />
        </span>
        <Description variyant="medium">{facebook_name}</Description>
        <a
          href={`https://facebook.com/${facebook_url}`}
          target="_blank"
          className={`absolute inset-0`}
        />
      </div>
    </div>
  );
}

export default ContactData;
