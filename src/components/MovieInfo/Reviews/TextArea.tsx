import React from "react";

type TextAreaProps = {
  handleTextArea: (s: string) => void;
  textAreaState: string;
};

const TextArea: React.FC<TextAreaProps> = props => {
  return (
    <textarea
      className="review-textarea"
      name=""
      id=""
      placeholder="Add your review..."
      onChange={e => props.handleTextArea(e.target.value)}
      value={props.textAreaState}
    />
  );
};

export default TextArea;
