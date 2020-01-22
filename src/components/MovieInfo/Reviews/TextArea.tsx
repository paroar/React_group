import React from "react";

type TextAreaProps = {
    handleTextArea: (s: string) => void;
}

 const TextArea: React.FC<TextAreaProps> = (props) => {
  return (
    <textarea
      className="review-textarea"
      name=""
      id=""
      cols={20}
      rows={5}
      placeholder="Add your review..."
      onChange={e =>props.handleTextArea(e.target.value)}
    />
  );
}

export default TextArea;