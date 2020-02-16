import React, { useState, useRef } from "react";
import Plus from "./Plus";
import Stars from "../../Stars";

type AccordionProps = {
  title: string;
  children?: React.ReactNode;
  vote_average?: number;
};

const Accordion = (props: AccordionProps) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion-icon");
  const content = useRef(null);

<<<<<<< HEAD:src/components/Accordion/Accordion.tsx
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
                <Plus 
                    width={20}
                    fill={"white"}
                    height="1.2rem"
                    plusClass={`${setRotate}`}
                />
            </button>
            <div ref={content} style={{maxHeight: `${setHeight}`}} className="accordion-content">
                <div className="accordion-text">
                    {props.children}
                </div>
            </div>
        </div>
=======
  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      // @ts-ignore
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
>>>>>>> dev:src/components/Help/Accordion/Accordion.tsx
    );
    setRotateState(
      setActive === "active" ? "accordion-icon" : "accordion-icon rotate"
    );
  };

  return (
    <div className="accordion-section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion-title">{props.title}</p>
        {props.vote_average ? (
          <Stars vote_average={props.vote_average} />
        ) : null}
        <Plus
          width={20}
          fill={"white"}
          height="1.2rem"
          plusClass={`${setRotate}`}
        />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion-content"
      >
        <div className="accordion-text">{props.children}</div>
      </div>
    </div>
  );
};

export default Accordion;
