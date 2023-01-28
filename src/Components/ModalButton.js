import { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const styles = {
  textAlign: "center",
  width: "50vw",
  height: "60vh",
  margin: "auto",
};

export default function ModalButton() {

const [open, setOpen] = useState(false);

  const onCloseModal = () => {
    setOpen(false);
  };
  const onOpenModal = () => {
    setOpen(true);
  };
  
    return (
      <div>
        <button className='submit-btn' onClick={onOpenModal}>Submit Ballot</button>
        <Modal open={open} onClose={onCloseModal}>
          <h2 style={styles}>Success</h2>
        </Modal>
      </div>
    );
}