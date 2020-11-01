import React, { MouseEvent, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux';
import ButtonSection from './ButtonSection';
import { S } from './styles';
import { enableCalculatorDrag, formatDisplayText } from './utils';

function Calculator() {
  const displayText = useSelector<RootState, string>(
    state => state.displayText
  );
  const calculatorRef = useRef<HTMLDivElement>(null);

  const onOuterBoxClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const subscription$ = enableCalculatorDrag(calculatorRef);

    return () => {
      if (subscription$) {
        subscription$.unsubscribe();
      }
    };
  }, []);

  return (
    <S.OuterBox ref={calculatorRef} onClick={onOuterBoxClick}>
      <S.InnerBox>
        <S.DisplaySection>{formatDisplayText(displayText)}</S.DisplaySection>
        <ButtonSection />
      </S.InnerBox>
    </S.OuterBox>
  );
}

export default Calculator;
