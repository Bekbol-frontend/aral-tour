import { CatalogReviewForm } from "@/features/CatalogReviewForm";
import { Modal } from "@/shared/ui/Modal";

interface IProps {
    open: boolean;
    onClose: () => void;
}

function CatalogReviewModal({ open, onClose }:IProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <CatalogReviewForm />
    </Modal>
  );
}

export default CatalogReviewModal;
