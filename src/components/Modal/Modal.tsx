import React from "react";
import Backdrop from "./Backdrop";
import { FaTimes } from "react-icons/fa";

type ModalProps = {
    show: boolean;
    modalClosed: any;
    modalWidth?: string | number | undefined;
    modalLeft?: string | number | undefined;
    children?: React.ReactNode;
}

const Modal = (props: ModalProps) => {
    return (
        <div>
            <Backdrop 
                show={props.show}
                clicked={props.modalClosed}
            />
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? '' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                    width: props.modalWidth,
                    left: props.modalLeft
                }}
            >
                <div className="close" onClick={props.modalClosed}>
                    <FaTimes size="2rem" />
                </div>
                {props.children}
            </div>
        </div>
    )
}
export default Modal;