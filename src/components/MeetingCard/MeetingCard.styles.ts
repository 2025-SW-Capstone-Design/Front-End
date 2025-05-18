import styled from '@emotion/styled';

const MeetingCardWrapper = styled.div`
  width: 100%;
  padding: 20px 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.08);
  background-color: ${({ theme }) => theme.colors.gray[10]};
  outline: 1px solid ${({ theme }) => theme.colors.gray[20]};
  outline-offset: -1px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[20]};
    outline: 1px solid ${({ theme }) => theme.colors.gray[40]};
    outline-offset: -1px;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.gray[30]};
    outline: 1px solid ${({ theme }) => theme.colors.gray[40]};
    outline-offset: -1px;
  }
`;

const MeetingCardHeader = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MeetingTopBar = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MeetingTime = styled.div`
  width: fit-content;
  height: 20px;
  padding: 4px 8px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.gray[90]};
  color: white;
  ${({ theme }) => theme.text.detail_bold};
`;

const MeetingCheckbox = styled.button`
  width: 24px;
  height: 24px;
`;

const MeetingTitle = styled.div`
  width: 100%;
  height: 20px;
  color: black;
  ${({ theme }) => theme.text.bodyM_bold};
`;

const MeetingCardContent = styled.div`
  width: 100%;
  height: auto;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;

const MeetingCardContentText = styled.div`
  width: 100%;
  height: 12px;
  ${({ theme }) => theme.text.labeS_bold};
  color: ${({ theme }) => theme.colors.gray[90]};
`;

const KeywordContainer = styled.div`
  width: 100%;
  height: 45px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px 4px;
`;

const Keyword = styled.div`
  width: fit-content;
  height: 25px;
  padding: 4px 12px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.gray[10]};
  outline: 1px solid ${({ theme }) => theme.colors.gray[40]};
  outline-offset: -1px;
  color: ${({ theme }) => theme.colors.gray[80]};
  ${({ theme }) => theme.text.labelL_bold};
`;

const MeetingCardFooter = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-top: auto;
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
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
`;

const Date = styled.div`
  width: auto;
  height: 17px;
  ${({ theme }) => theme.text.bodyS_bold};
  color: ${({ theme }) => theme.colors.gray[80]};
`;

const Time = styled.div`
  width: auto;
  height: 17px;
  ${({ theme }) => theme.text.bodyS_medium};
  color: ${({ theme }) => theme.colors.gray[70]};
`;

export {
  MeetingCardWrapper,
  MeetingCardHeader,
  MeetingTopBar,
  MeetingTime,
  MeetingCheckbox,
  MeetingTitle,
  MeetingCardContent,
  MeetingCardContentText,
  KeywordContainer,
  Keyword,
  MeetingCardFooter,
  MemberAvatars,
  DueDate,
  Date,
  Time,
};
