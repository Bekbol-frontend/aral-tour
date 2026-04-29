import { BookForm } from "@/features/BookForm";
import { Modal } from "../../Modal";

interface IProps {
  open: boolean;
  onClose: () => void;
}

function BookModal({ open, onClose }: IProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <BookForm />
    </Modal>
  );
}

export default BookModal;
