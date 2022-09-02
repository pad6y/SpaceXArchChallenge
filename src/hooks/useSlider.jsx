import { useState } from 'react';

export const useSlider = (arrLength) => {
  const [idx, setIdx] = useState(0);

  const handleBack = () => {
    if (idx === 0) {
      setIdx(arrLength - 1);
    } else {
      setIdx((prev) => prev - 1);
    }
  };
  const handleForward = () => {
    if (idx === arrLength - 1) {
      setIdx(0);
    } else {
      setIdx((prev) => prev + 1);
    }
  };

  return [idx, handleBack, handleForward];
};
