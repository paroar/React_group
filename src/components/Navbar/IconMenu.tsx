import React from "react";

type IconMenuProps = {
  isOpen: boolean;
  handleIsOpen: () => void;
};

const IconMenu: React.FC<IconMenuProps> = ({ isOpen, handleIsOpen }) => {
  return (
    <div className={`${isOpen ? "cross" : "menu"}`} onClick={handleIsOpen}>
      <span className="bar" />
    </div>
  );
};

export default IconMenu;
