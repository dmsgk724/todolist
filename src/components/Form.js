import React from "react";
import "./Form.css";

const Form = ({
  value,
  vs,
  ve,
  onChange,
  onCreate,
  onKeyPress,
  onTSChange,
  onTEChange,
}) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      을
      <input value={vs} onChange={onTSChange} onKeyPress={onKeyPress} />
      시부터
      <input value={ve} onChange={onTEChange} onKeyPress={onKeyPress} />
      시까지
      <div className="create-button" onClick={onCreate}>
        +
      </div>
    </div>
  );
};

export default Form;
