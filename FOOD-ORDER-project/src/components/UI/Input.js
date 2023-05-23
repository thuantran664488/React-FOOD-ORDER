import React, { useImperativeHandle, useRef } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const getCurrentValue = () => {
    return inputRef.current.value;
  };

  useImperativeHandle(ref, () => {
    return {
      getCurrentValue: getCurrentValue,
    };
  });

  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={inputRef} {...props.input} />
    </div>
  );
});

export default Input;
