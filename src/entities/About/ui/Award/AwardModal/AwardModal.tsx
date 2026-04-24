import { Modal } from "@/shared/ui/Modal";
import Image from "next/image";

interface IProps {
  open: boolean;
  onClose: () => void;
  imgUrl: string;
}

function AwardModal({ open, onClose, imgUrl }: IProps) {
  return (
    <Modal
      className="max-w-[1000] h-auto md:h-[700]"
      open={open}
      onClose={onClose}
    >
      <Image
        src={imgUrl}
        width={500}
        height={500}
        alt="dsa"
        className="w-full h-auto rounded-10"
        priority
      />
    </Modal>
  );
}

export default AwardModal;
