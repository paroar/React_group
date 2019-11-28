import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

type AccordionProps = {
    title: string;
    children?: React.ReactNode;
}

const Accordion = (props: AccordionProps) => {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion-icon");
    const content = useRef(null);
    

    const toggleAccordion = () => {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
        // @ts-ignore
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
          setActive === "active" ? "accordion-icon" : "accordion-icon rotate"
        );
        }

    return (
        <div className="accordion-section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion-title">{props.title}</p>
                <Chevron 
                    width={20}
                    fill={"white"}
                    height="1.2rem"
                    chevronClass={`${setRotate}`}
                />
            </button>
            <div ref={content} style={{maxHeight: `${setHeight}`}} className="accordion-content">
                <div className="accordion-text">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Accordion;