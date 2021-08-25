import { useState } from 'react';

const useInputValidate = () => {
  const [input, setInput] = useState('');
  const [isValide, setIsValide] = useState(true);

  const handleInput = (event) => {
    setInput(event.target.value);
    setIsValide(true)
  }

  const handleBlur = () => {
    if (input === '') {
      setIsValide(false);
    } else {
      setIsValide(true);
    }
  }
  return [input, isValide, handleInput, handleBlur];
}

export default useInputValidate
