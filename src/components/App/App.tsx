import React, { MouseEvent, useState } from 'react';

import Calculator from '../Calculator';
import { S } from './styles';

function App() {
  const [openCalculator, setOpenCalculator] = useState(false);

  const toggleCalculator = (e: MouseEvent) => {
    e.stopPropagation();
    setOpenCalculator(prev => !prev);
  };

  const closeCalculator = () => {
    setOpenCalculator(false);
  };

  return (
    <S.Container
      data-testid="appContainer"
      openCalculator={openCalculator}
      onClick={closeCalculator}
    >
      <S.Button onClick={toggleCalculator}>Open Calculator</S.Button>
      {openCalculator && <Calculator />}
    </S.Container>
  );
}

export default App;
