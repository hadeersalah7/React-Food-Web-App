import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
const Modal = ({ open, children, className = "" }) => {
  const dialog = useRef();
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    }
  }, [open]);
  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal"),
  );
};

export default Modal;
