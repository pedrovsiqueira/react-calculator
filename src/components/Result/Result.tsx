import React, { useContext } from 'react';
import { AppContext } from '../../hooks/AppContext';
import { Container, StyledResult, StyledInput } from './styles';

export const Result: React.FC = () => {
  const { input, result } = useContext(AppContext);

  return (
    <Container>
      <StyledInput>{input}</StyledInput>
      <StyledResult>{result.slice(0, 12)}</StyledResult>
    </Container>
  );
};
