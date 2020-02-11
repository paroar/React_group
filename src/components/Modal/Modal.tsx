import React from "react";
import Backdrop from "./Backdrop";

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
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                    width: props.modalWidth,
                    left: props.modalLeft
                }}
            >
                <div className="aux-wrapper">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
export default Modal;