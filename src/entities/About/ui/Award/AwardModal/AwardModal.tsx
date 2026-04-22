import { X } from "lucide-react";
import Image from "next/image";

interface IProps {
  open: boolean;
  onClose: () => void;
  imgUrl: string;
}

function AwardModal({ open, onClose, imgUrl }: IProps) {
  return (
    <dialog id="my_modal_1" className="modal" open={open} onClick={onClose}>
      <div
        className="modal-box max-w-[1000] h-auto md:h-[700]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="btn btn-circle! bg-secondary-300 shadow-none border-none text-white absolute top-2 right-2"
        >
          <X />
        </button>
        <Image
          src={imgUrl}
          width={500}
          height={500}
          alt="dsa"
          className="w-full h-auto rounded-10"
          priority
        />
      </div>
    </dialog>
  );
}

export default AwardModal;
