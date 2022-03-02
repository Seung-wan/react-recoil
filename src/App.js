import React from 'react';
import CharacterCounter from './pages/CharacterCounter';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
const App = () => {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
};

export default App;
