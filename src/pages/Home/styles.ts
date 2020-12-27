import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};
`;

export const StyledBackground = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${props => props.theme.colors.calculatorBackground};

  display: flex;
  flex-direction: column;

  @media (min-width: 480px) {
    border-radius: 20px;
    max-width: 430px;
    max-height: 700px;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 40px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  justify-items: center;
  align-items: end;

  max-height: 400px;

  @media (min-width: 375px) {
    margin: auto 0;
  }
`;
