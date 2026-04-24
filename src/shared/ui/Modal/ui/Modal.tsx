import { ReactNode, useEffect } from "react";
import { Portal } from "../../Portal";
import { clsx } from "@/shared/lib/clsx";
import { X } from "lucide-react";

interface IProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

function Modal({ open, onClose, children, className = "" }: IProps) {
  useEffect(() => {
    const onKeyUp = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [onClose]);

  return (
    <Portal>
      <dialog id="my_modal_1" className="modal" open={open} onClick={onClose}>
        <div
          className={clsx(["modal-box max-w-[700]", className])}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="btn btn-circle! bg-secondary-300 shadow-none border-none text-white absolute top-2 right-2"
          >
            <X />
          </button>
          {children}
        </div>
      </dialog>
    </Portal>
  );
}

export default Modal;
