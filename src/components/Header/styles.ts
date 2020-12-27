import styled from 'styled-components';

export const Container = styled.div`
  height: 142px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.calculatorBackground};
  max-width: 98%;
`;

export const SubHeader = styled.div`
  height: 10px;

  font-size: 15px;
  font-weight: bold;

  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.calculatorBackground};

  display: flex;
  justify-content: space-between;
  margin: 10px 0 0 10px;
  align-items: center;

  img {
    height: 15px;
  }

  div {
    img {
      &:first-child {
        margin-right: 10px;
      }
    }
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const ModeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;

  img {
    height: 50px;

    :hover {
      cursor: pointer;
    }
  }
`;
