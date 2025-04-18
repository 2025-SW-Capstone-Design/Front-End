import styled from '@emotion/styled';

const EmailTagWrapper = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px 12px;
  border-radius: 10px;
  background: #f2f2f7;
  outline: 1px solid #aeaeb2;
  outline-offset: -1px;

  svg {
    width: 24px;
    height: 24px;
    fill: #8e8ea9;
  }
`;

const Email = styled.div`
  height: 15px;
  ${({ theme }) => theme.text.labelM_medium};
  color: #aeaeb2;
  display: flex;
  align-items: center;
`;

const RemoveButton = styled.button`
  cursor: pointer;
  height: 24px;
  svg {
    width: 24px;
    height: 24px;
    fill: #8e8ea9;
  }
`;

export { EmailTagWrapper, Email, RemoveButton };
