import styled from 'styled-components';

interface ContainerProps {
  openCalculator: boolean;
}

export const S = {
  Container: styled.div<ContainerProps>`
    height: inherit;
    cursor: ${({ openCalculator }) => (openCalculator ? 'pointer' : 'initial')};
  `,
  Button: styled.button``,
};
