import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { counterState, friendState } from '../recoil/Counter';
function CharacterCounter() {
  const [count, setCount] = useRecoilState(counterState);
  const [friendList, setFriendList] = useRecoilState(friendState);
  const [name, setName] = useState('');
  const onClick = () => {
    setCount(count + 1);
  };

  const onAddFriend = () => {
    setFriendList([...friendList, name]);
    setName('');
  };
  return (
    <div>
      <div>
        <h1>{count}</h1>
        <button onClick={onClick}>카운트 증가</button>
      </div>
      <div>
        {friendList.map((friend, idx) => {
          return <p key={idx}>{friend}</p>;
        })}
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button onClick={onAddFriend}>친구 추가</button>
      </div>
    </div>
  );
}

export default CharacterCounter;
