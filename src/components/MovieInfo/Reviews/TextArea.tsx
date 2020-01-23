import React from "react";

type TextAreaProps = {
    handleTextArea: (s: string) => void;
    textAreaState: string;
}

 const TextArea: React.FC<TextAreaProps> = (props) => {
  return (
    <input
      className="review-textarea"
      name=""
      id=""
      placeholder="Add your review..."
      value={props.textAreaState}
      onChange={e =>props.handleTextArea(e.target.value)}
    />
  );
}

export default TextArea;