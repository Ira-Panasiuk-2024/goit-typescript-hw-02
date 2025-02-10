import Modal from "react-modal";
import css from "./ImageModal.module.css";
import ImageModalProps from './ImageModal.types';

const ImageModal = ({ isOpen, onClose, imageUrl, imageDescription }: ImageModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
      onAfterOpen={() => {
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            onClose();
          }
        });
      }}
      onAfterClose={() => {
        document.removeEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            onClose();
          }
        });
      }}
      ariaHideApp={false}
      className={css.modalContent}
      overlayClassName={css.modalOverlay}
    >
      <figure>
        <div className={css.imageContainer}>
          <img src={imageUrl} alt={imageDescription} className={css.modalImage} />
          <span className={css.imageDescription}>{imageDescription}</span>
        </div>
        <button className={css.closeButton} onClick={onClose}>Close</button>
      </figure>
    </Modal>
  );
};

export default ImageModal;