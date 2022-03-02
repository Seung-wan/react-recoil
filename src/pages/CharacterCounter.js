import React from 'react';
import { useRecoilState } from 'recoil';
import { counterState } from '../recoil/Counter';
function CharacterCounter() {
  const [count, setCount] = useRecoilState(counterState);

  const onClick = () => {
    setCount(count + 1);
  };
  return <div onClick={onClick}>{count} </div>;
}

export default CharacterCounter;
