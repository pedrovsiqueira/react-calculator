import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledBackground = styled.div`
  width: 199px;
  height: 398px;
  border-radius: 20px;
  background-color: #374353;

  display: flex;
  flex-direction: column;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: 14px;

  button {
    margin: 14px 14px 0 0;
  }
`;
