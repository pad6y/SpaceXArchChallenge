import { useState } from 'react';

export const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  const onClick = () => {
    setToggle(!toggle);
  };

  return [toggle, onClick];
};
