import "./Snackbar.css";

function Snackbar({ open, message }) {
  if (!open) return null;

  return (
    <div className="snackbar" role="status" aria-live="polite">
      {message}
    </div>
  );
}

export default Snackbar;
