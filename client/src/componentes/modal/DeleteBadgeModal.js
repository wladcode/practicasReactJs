import React from "react";
import Modal from "./Modal";

function DeleteBadgeModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteBadgeModal">
        <h1>Estas seguro?</h1>

        <p>Estas a punto de eliminar este registro</p>

        <div>
          <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">
            Aceptar
          </button>
          <button onClick={props.onClose} className="btn btn-primary">
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;
