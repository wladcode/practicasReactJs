import React from "react";
import ReactDOM from "react-dom";

import "./modal.css";

function Modal(props) {
    if (!props.isOpen) {
        return null;
    }
    return ReactDOM.createPortal(
        <div className="Modal">
            <div className="Modal_container">
                <button onClick={props.onClose} className="Modal_close-button">
                    x
                </button>

                {props.children}
            </div>
        </div>,
        document.getElementById("modal"),
    );
}

export default Modal;
