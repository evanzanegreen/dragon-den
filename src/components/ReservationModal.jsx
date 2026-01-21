import { useEffect, useRef } from "react";
import "./ReservationModal.css";
import Modal from "./Modal";
import Button from "./Button";
import { IoClose } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";

function ModalHeader({ title, onClose }) {
  return (
    <div className="res-modal-header">
      <h2 className="res-modal-title">{title}</h2>

      <Button
        variant="ghost"
        size="sm"
        leftIcon={<IoClose />}
        type="button"
        aria-label="Close modal"
        onClick={onClose}
        className="close-icon"
      />
    </div>
  );
}

function ModalField({ label, type = "text", inputRef }) {
  return (
    <label className="modal-field">
      <span>{label}</span>
      <input ref={inputRef} type={type} />
    </label>
  );
}

function ModalActions({ children }) {
  return (
    <Button
      rightIcon={<IoIosArrowRoundForward />}
      size="md"
      variant="primary"
      className="submit-btn"
      type="submit"
    >
      {children}
    </Button>
  );
}

function ReservationModal({ isOpen, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Find a Table submitted");
    onClose(); // optional, but gives visible feedback by closing
  };

  const nameInputRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    //Focus after the modal mounts
    requestAnimationFrame(() => {
      nameInputRef.current?.focus();
    });
  });

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} ariaLabel="Reserve a Table">
        <ModalHeader title="Reserve a Table" onClose={onClose} />

        <form className="res-modal-form" onSubmit={handleSubmit}>
          <ModalField label="Full Name" inputRef={nameInputRef} />
          <div className="res-modal-row">
            <ModalField label="Party Size" type="number" />
            <ModalField label="Date" type="date" />
            <ModalField label="Time" type="time" />
          </div>

          <ModalActions>Find a Table</ModalActions>
        </form>
      </Modal>
    </>
  );
}

export default ReservationModal;
