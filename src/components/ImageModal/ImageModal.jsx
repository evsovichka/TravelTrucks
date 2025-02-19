import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

export default function ImageModal({ onClose, img, name }) {
  return (
    <ReactModal
      isOpen={true}
      ariaHideApp={false}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={css.modalContent}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <div className="modal-image">
        <img src={img} alt={`Photo of ${name} `} />
      </div>
    </ReactModal>
  );
}
