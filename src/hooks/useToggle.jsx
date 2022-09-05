import { useState } from 'react';

const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  const onClickTog = () => {
    setToggle(!toggle);
  };

  return [toggle, onClickTog];
};

export default useToggle;
