import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux';
import ButtonSection from './ButtonSection';
import { S } from './styles';
import { formatDisplayText } from './utils';

function Calculator() {
  const displayText = useSelector<RootState, string>(
    state => state.displayText
  );

  return (
    <S.Container>
      <S.DisplaySection>{formatDisplayText(displayText)}</S.DisplaySection>
      <ButtonSection />
    </S.Container>
  );
}

export default Calculator;
