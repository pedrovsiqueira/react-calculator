import styled from 'styled-components';

interface StyledProps {
  isElement?: boolean;
}

export const StyledButton = styled.button<StyledProps>`
  width: 60px;
  height: 60px;

  background: ${props => props.theme.colors.calculatorBackground};
  box-shadow: -5px -5px 10px ${props => props.theme.colors.buttonBoxShadowPrimary},
    5px 5px 10px ${props => props.theme.colors.buttonBoxShadowSecondary};
  border-radius: 10px;

  font-size: 20px;
  color: ${props =>
    props.isElement ? props.theme.colors.operator : props.theme.colors.text};

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 20px;
  }

  @media (min-width: 375px) {
    width: 75px;
    height: 75px;
  }
`;
