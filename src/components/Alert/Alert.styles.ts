import styled from '@emotion/styled';

const AlertWrapper = styled.div`
  position: absolute;
  top: 23px;
  right: 35px;
  width: 294px;
  height: 59px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background-color: ${({ theme }) => theme.colors.primary[10]};
  outline: 1.5px solid ${({ theme }) => theme.colors.primary[20]};
  outline-offset: -1.5px;
  border-radius: 8px;
`;

const AlertText = styled.div`
  height: 30px;
  color: black;
  ${({ theme }) => theme.text.bodyXL_medium};
`;

const AlertIcon = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export { AlertWrapper, AlertText, AlertIcon };
