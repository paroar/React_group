import React from "react";

type ChevronProps = {
    chevronClass?: string;
    height: string | number;
    width: string | number;
    fill: string;
}

const Chevron = (props: ChevronProps) => {
    return (
        <svg
            className={props.chevronClass} 
            height={props.height}
            width={props.width}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512"
        >
            <path fill={props.fill} 
                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"            >
            </path>
        </svg>
    );
};

export default Chevron;