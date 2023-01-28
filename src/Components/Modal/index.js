import { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const styles = {
  textAlign: "center",
  width: "40vw",
  height: "60vh",
  margin: "auto",
};

export default function ModalView({ open, setOpen }) {

  const onCloseModal = () => {
    setOpen(false);
  };

  return (
    <div>

      <Modal open={open} onClose={onCloseModal}>
        <h2 style={styles}>Success</h2>
      </Modal>
    </div>
  );
}