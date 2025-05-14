import styled from '@emotion/styled';

const MilestoneCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;
  width: 296px;
  height: 280px;
  max-width: 296px;

  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.08);
  background-color: white;
  outline: 1px solid ${({ theme }) => theme.colors.gray[40]};
  outline-offset: -1px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[20]};
  }
`;

const MilestoneCardHeader = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MilestoneCardStatusBar = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MilestoneCardStatus = styled.div`
  width: 43px;
  height: 20px;
  background: ${({ theme }) => theme.colors.gray[90]};
  color: white;
  ${({ theme }) => theme.text.labeS_bold};
  padding: 4px 8px;
  border-radius: 4px;
`;

const MilestoneCardCheckbox = styled.button`
  width: 24px;
  height: 24px;
`;

const MilestoneCardTitle = styled.div`
  width: 100%;
  height: 20px;
  color: black;
  ${({ theme }) => theme.text.bodyM_bold};
`;

const MilestoneCardDescription = styled.div`
  width: 100%;
  height: 20px;
  color: ${({ theme }) => theme.colors.gray[90]};
  ${({ theme }) => theme.text.bodyS_light};

  margin-bottom: 4px;
`;

const MilestoneCardContent = styled.div`
  width: 248px;
  height: auto;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;

const MilestoneCardContentText = styled.div`
  width: 100%;
  height: 12px;
  ${({ theme }) => theme.text.labeS_bold};
`;

const MilestoneCardLabels = styled.div`
  height: 64px;
  padding: 2px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px 4px;
`;

const MilestoneCardFooter = styled.div`
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
  MilestoneCardWrapper,
  MilestoneCardHeader,
  MilestoneCardStatusBar,
  MilestoneCardStatus,
  MilestoneCardCheckbox,
  MilestoneCardTitle,
  MilestoneCardDescription,
  MilestoneCardContent,
  MilestoneCardContentText,
  MilestoneCardLabels,
  MilestoneCardFooter,
  MemberAvatars,
  DueDate,
  Date,
};
