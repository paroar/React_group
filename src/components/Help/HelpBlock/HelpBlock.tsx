import React from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import Modal from "./../Modal/Modal";
import { FaTimes } from "react-icons/fa";

type HelpBlockProps = {
    title: string;
    description: string;
    buttonText: string;
    buttonClass: string;
    children?: React.ReactNode;
    modalWidth?: string | number | undefined;
    modalLeft?: string | number | undefined
    //children es para el icono
}
type HelpBlockState = {
    isOpen: boolean;
}

class HelpBlock extends React.Component<HelpBlockProps, HelpBlockState> {
    state = {
        isOpen: false
    }
    togglePopUp = (_event: React.MouseEvent) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {

        return (
            <div className="help-block-wrapper">
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <ButtonComponent 
                    action={this.props.buttonText}
                    class={this.props.buttonClass}
                    onClick={this.togglePopUp.bind(this)}
                >
                </ButtonComponent>

                <Modal show={this.state.isOpen}
                    modalClosed={this.togglePopUp.bind(this)}
                    modalWidth={this.props.modalWidth}
                    modalLeft={this.props.modalLeft}
                >
                    <div className="close" onClick={this.togglePopUp.bind(this)}>
                        <FaTimes size="2rem" />
                    </div>
                    {this.props.children}
                </Modal>
            </div>
        )
    }
};

export default HelpBlock;