import React from "react";
import Option from "./Option";

const Options = (props) => (
  <div>
    <button onClick={props.handelDelet}>Remove All</button>
    {props.options.length == 0 && <p>please add an opttion</p>}
    {props.options.map((option) => (
      <Option
        key={option}
        optionText={option}
        handelDeletOption={props.handelDeletOption}
      />
    ))}
  </div>
);
export default Options;
