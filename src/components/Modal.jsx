import "./Modal.css";
import { useEffect, useRef } from "react";

function Modal({ isOpen, onClose, children, ariaLabel }) {
  const scrollYRef = useRef(0);
  const prevStylesRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const body = document.body;

    // If we're closing, force-restore (even if a prior cleanup failed)
    if (!isOpen) {
      if (prevStylesRef.current) {
        const prev = prevStylesRef.current;

        body.style.position = prev.position;
        body.style.top = prev.top;
        body.style.left = prev.left;
        body.style.right = prev.right;
        body.style.width = prev.width;

        window.scrollTo(0, scrollYRef.current);
        prevStylesRef.current = null;
      }
      return;
    }

    // Opening: save + lock
    scrollYRef.current = window.scrollY;

    prevStylesRef.current = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    };

    body.style.position = "fixed";
    body.style.top = `-${scrollYRef.current}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    // Cleanup still included (works on unmount too)
    return () => {
      if (!prevStylesRef.current) return;

      const prev = prevStylesRef.current;
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;

      window.scrollTo(0, scrollYRef.current);
      prevStylesRef.current = null;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const dialogEl = dialogRef.current;
    if (!dialogEl) return;

    const selector =
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

    const handleKeyDown = (e) => {
      if (e.key !== "Tab") return;

      const focusables = Array.from(dialogEl.querySelectorAll(selector)).filter(
        (el) => !el.hasAttribute("disabled") && el.tabIndex !== -1
      );

      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      // If focus somehow escaped, pull it back in on Shift+Tab
      if (e.shiftKey) {
        if (active === first || !dialogEl.contains(active)) {
          e.preventDefault();
          last.focus();
        }
        return;
      }

      // Normal Tab: if on last, wrap to first
      if (active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // ...your Escape key effect can stay separate, or be combined

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-dialog"
          role="dialog"
          aria-modal="true"
          aria-label={ariaLabel}
          onClick={(e) => e.stopPropagation()}
          ref={dialogRef}
        >
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </>
  );
}

export default Modal;
