import { Modal } from "../../Modal";

interface IProps {
  open: boolean;
  onClose: () => void;
}

function BookModal({ open, onClose }: IProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <div>Book modal</div>
    </Modal>
  );
}

export default BookModal;
