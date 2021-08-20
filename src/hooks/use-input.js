import { useState } from 'react';

export default function useInput (validateFn) {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isInputValid = validateFn(enteredValue);
  const hasError = !isInputValid && isTouched;

  const changeInputHandler = (event) => {
    setEnteredValue(event.target.value);
  }

  const touchInputHandler = (isTouched) => {
    setIsTouched(isTouched);
  }

  return { enteredValue, hasError, changeInputHandler, touchInputHandler }
}