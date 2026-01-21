import "./Modal.css";
import { useEffect } from "react";

function Modal({ isOpen, onClose, children, ariaLabel }) {
  if (!isOpen) return null;

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-dialog"
          role="dialog"
          aria-modal="true"
          aria-labeb={ariaLabel}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </>
  );
}

export default Modal;
