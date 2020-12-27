import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export const Button: React.FC<ButtonProps> = ({ children, value, ...rest }) => {
  const operatorButtons = ['+', '-', '/', '%', '*', '=', 'PM', 'C'];
  const isElement = operatorButtons.includes(value);

  return (
    <StyledButton isElement={isElement} {...rest}>
      {children}
    </StyledButton>
  );
};
