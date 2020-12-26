import React from 'react';
import { Container, StyledResult, StyledInput } from './styles';
import { HeaderProps } from '../../interfaces/interfaces';

export const Result: React.FC<HeaderProps> = ({ result, input }) => (
  <Container>
    <StyledInput>{input}</StyledInput>
    <StyledResult>{result}</StyledResult>
  </Container>
);
