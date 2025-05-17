import styled from '@emotion/styled';

const CardContainer = styled.div`
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

const CardHeader = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CardStatus = styled.div`
  width: 43px;
  height: 20px;
  background: ${({ theme }) => theme.colors.gray[90]};
  color: white;
  ${({ theme }) => theme.text.labeS_bold};
  padding: 4px 8px;
  border-radius: 4px;
`;

const CardTitle = styled.div`
  width: 100%;
  height: 20px;
  ${({ theme }) => theme.text.bodyL_bold};
`;

const CardDescription = styled.div`
  width: 100%;
  min-height: 20px;
  color: ${({ theme }) => theme.colors.gray[90]};
  ${({ theme }) => theme.text.bodyM_light};

  text-overflow: ellipsis;
  white-space: wrap;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const CardContent = styled.div`
  width: 248px;
  height: auto;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;

const CardContentText = styled.div`
  width: 100%;
  height: 12px;
  ${({ theme }) => theme.text.labeS_bold};
  margin-top: 12px;
`;

const CardFooter = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 32px;
  flex-direction: column;
  gap: 12px;
  justify-content: flex-end;
  align-items: flex-end;
`;

const MemberAvatars = styled.div`
  width: 123px;
  display: flex;
  justify-content: flex-end;
`;

const DueDate = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const Date = styled.div`
  margin-left: auto;
  width: auto;
  ${({ theme }) => theme.text.bodyS_bold};
  color: ${({ theme }) => theme.colors.gray[80]};
`;

export {
  CardContainer,
  CardHeader,
  CardStatus,
  CardTitle,
  CardDescription,
  CardContent,
  CardContentText,
  CardFooter,
  MemberAvatars,
  DueDate,
  Date,
};
