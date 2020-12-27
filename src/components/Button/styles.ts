import styled from 'styled-components';

interface StyledProps {
  isElement?: boolean;
}

export const StyledButton = styled.button<StyledProps>`
  width: 32px;
  height: 32px;

  background: ${props => props.theme.colors.calculatorBackground};
  box-shadow: -5px -5px 10px ${props => props.theme.colors.buttonBoxShadowPrimary},
    5px 5px 10px ${props => props.theme.colors.buttonBoxShadowSecondary};
  border-radius: 10px;

  font-size: 12px;
  color: ${props =>
    props.isElement ? props.theme.colors.operator : props.theme.colors.text};

  display: flex;
  justify-content: center;
  align-items: center;
`;
