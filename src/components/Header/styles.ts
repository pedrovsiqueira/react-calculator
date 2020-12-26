import styled from 'styled-components';

export const Container = styled.div`
  height: 142px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.calculatorBackground};
`;

export const SubHeader = styled.div`
  width: 173px;
  height: 7.85px;

  font-size: 6.5px;
  font-weight: bold;

  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.calculatorBackground};

  display: flex;
  justify-content: space-between;
  margin: 9px auto;
`;

export const ModeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 15px;

  :hover {
    cursor: pointer;
  }
`;
