import "./ReservationModal.css";
import Modal from "./Modal";
import { IoClose } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";

function ModalHeader({ title, onClose }) {
  return (
    <div>
      <h2>{title}</h2>

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

function ModalField({ label, type = "text" }) {
  return (
    <label className="modal-field">
      <span>{label}</span>
      <input type={type} />
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

function handleSubmit(e) {
  e.preventDefault(); // stop page reload
  console.log("Reservation submitted");
  onClose(); // close modal (optional)
}

function ReservationModal({ isOpen, onClose }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} ariaLabel="Resreve a Table">
        <ModalHeader title="Reserve a Table" onClose={onClose} />

        <form onSubmit={handleSubmit}>
          <ModalField label="Full Name" />
          <ModalField label="Party Size" type="number" />
          <ModalField label="Date" type="date" />
          <ModalField label="Time" type="time" />

          <ModalActions>Find a Table</ModalActions>
        </form>
      </Modal>
    </>
  );
}

export default ReservationModal;
