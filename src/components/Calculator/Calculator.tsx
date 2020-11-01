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
    <S.OuterBox>
      <S.InnerBox>
        <S.DisplaySection>{formatDisplayText(displayText)}</S.DisplaySection>
        <ButtonSection />
      </S.InnerBox>
    </S.OuterBox>
  );
}

export default Calculator;
