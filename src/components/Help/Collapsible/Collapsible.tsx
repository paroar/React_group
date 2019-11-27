import React from "react";
import { FaAngleDown } from "react-icons/fa";

type CollapsibleProps = {
    title: number | string,
    children: React.ReactNode
}

type CollapsibleState = {
    isOpen: boolean
}

class Collapsible extends React.Component<CollapsibleProps, CollapsibleState> {
    constructor(props: CollapsibleProps) {
        super(props);
        this.state = {
            isOpen:false
        }
        this.togglePanel = this.togglePanel.bind(this)
    }
    togglePanel(_event: any) {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <>
                <div className="topic" onClick={(event: any) => {
                    this.togglePanel(event)
                }}>
                    <span>{this.props.title}</span>
                    <FaAngleDown className="collapsible-icon"></FaAngleDown>
                </div>
                <div className="collapsible-content">
                    {this.state.isOpen ? <>{this.props.children}</> : null}
                </div>
            </>
        )
    }
}

export default Collapsible;