import React from "react";

const Option = (props) => (
  <div>
    {props.optionText}
    <button
      onClick={(e) => {
        props.handelDeletOption(props.optionText);
      }}
    >
      Remove Me
    </button>
  </div>
);
export default Option;
