import styled from 'styled-components';

export const Container = styled.div`
  height: 99px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 60px 15px 0 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 195px;
`;

export const StyledInput = styled.div`
  font-size: 12px;
  color: #b8c6ff;
`;

export const StyledResult = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;
