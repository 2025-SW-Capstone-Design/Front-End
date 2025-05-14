import styled from '@emotion/styled';

export const CardContainer = styled.div`
  min-height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${({ theme }) => theme.colors.gray[10]};
  border-radius: 8px;
  padding: 12px 16px;
  cursor: pointer;
  outline: 1px solid ${({ theme }) => theme.colors.gray[20]};
  outline-offset: -1px;
  &:hover {
    background: ${({ theme }) => theme.colors.gray[30]};
    outline: 1px solid ${({ theme }) => theme.colors.gray[40]};
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CardStatus = styled.div`
  width: 43px;
  height: 20px;
  background: ${({ theme }) => theme.colors.gray[90]};
  color: white;
  ${({ theme }) => theme.text.labeS_bold};
  padding: 4px 8px;
  border-radius: 4px;
  text-align: center;
`;

export const CardTitle = styled.div`
  width: 100%;
  height: 20px;
  ${({ theme }) => theme.text.bodyL_bold};
`;

export const CardDescription = styled.div`
  width: 100%;
  min-height: 20px;
  color: ${({ theme }) => theme.colors.gray[90]};
  ${({ theme }) => theme.text.bodyM_light};
  margin-top: 4px;
  margin-bottom: 4px;
  white-space: pre-line;
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 32px;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const MemberAvatars = styled.div`
  width: 123px;
  display: flex;
  justify-content: flex-end;
`;

export const LabelGroup = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const Label = styled.div<{ color: string }>`
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${({ color }) => color};
  color: white;
  font-size: 12px;
  font-weight: 600;
`;
