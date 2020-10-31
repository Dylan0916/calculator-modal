import React from 'react';

import Button from './Button';
import { displaySpec } from './spec';
import { S } from './styles';

function ButtonSection() {
  return (
    <S.Container>
      {displaySpec.map(v => (
        <Button key={v.defaultText} data={v} />
      ))}
    </S.Container>
  );
}

export default ButtonSection;
