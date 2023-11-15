import { useState } from "react";

const useInput = (fnCondition) => {
  const [enteredValue, isEnteredValue] = useState("");
  const [touched, isTouched] = useState(false);

  const isValid = fnCondition(enteredValue);
  const isError = isValid && touched;

  const inputChangeHandler = (event) => {
    isEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    isTouched(true);
  };

  const reset = () => {
    isEnteredValue("");
    isTouched(false);
  };

  return {
    enteredValue,
    isValid,
    isError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
