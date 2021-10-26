import { useEffect } from "react";
import PropTypes from "prop-types";

export default function Modal({ children, onClose }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const onBackdropClose = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className="Overlay" onClick={onBackdropClose}>
      <div className="Modal">{children}</div>
    </div>
  );
}

Modal.propTypes = {
  obj: PropTypes.object,
  onClose: PropTypes.func,
};
