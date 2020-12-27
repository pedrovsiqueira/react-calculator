import styled from 'styled-components';

export const Container = styled.div`
  height: 99px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 15px 15px 0 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 98%;
`;

export const StyledInput = styled.div`
  font-size: 20px;
  color: ${props => props.theme.colors.inputText};

  @media (min-width: 375px) {
    font-size: 25px;
  }
`;

export const StyledResult = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: ${props => props.theme.colors.resultText};

  @media (min-width: 375px) {
    font-size: 50px;
  }
`;
