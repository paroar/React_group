import React from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

type ArrowProps = {
  left?: any;
  right?: any;
};

const Arrows:React.FC<ArrowProps> = props => {
  return (
    <div>
      <span onClick={props.left}>
        <IoIosArrowDropleft size={40} />
      </span>
      <span onClick={props.right}>
        <IoIosArrowDropright size={40} />
      </span>
    </div>
  );
};

export default Arrows;
