import styled from '@emotion/styled';

const MilestoneContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
`;

const MilestoneHeader = styled.div`
  display: flex;
  flex-direction: column;

  padding: 72px 48px 36px 48px;
  flex-shrink: 0;
`;

const MilestoneHeaderBack = styled.div`
  display: flex;
  flex-direction: row;

  gap: 4px;
  margin-bottom: 14px;
  align-items: center;

  color: ${(props) => props.theme.colors.gray[70]};
  font-size: 18px;
  font-weight: 700;

  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
    aspect-ratio: 1/1;
  }
`;

const MilestoneHeaderTeamName = styled.div`
  font-size: 32px;
  font-weight: 800;
`;

const MilestoneHeaderButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;

  height: 52px;
  gap: 24px;

  align-items: center;
  align-self: stretch;
`;

const MilestoneContent = styled.div`
  display: flex;
  flex-direction: column;

  padding: 24px 48px;
  gap: 20px;
`;

const MilestoneContentHeaderText = styled.div`
  display: flex;
  flex-direction: row;

  font-size: 24px;
  font-weight: 700;

  gap: 10px;
  align-items: center;

  span {
    color: ${(props) => props.theme.colors.gray[80]};
    font-size: 16px;
  }
`;

const MilestoneTaskSection = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  gap: 24px;
`;

const MilestoneTaskList = styled.div`
  display: flex;
  flex-direction: column;

  width: 35%;
  height: 70vh;
  padding: 24px;

  border-radius: 12px;
  border: 2px solid ${(props) => props.theme.colors.gray[40]};
  gap: 12px;
`;

const MilestoneTaskListHeaderText = styled.div`
  display: flex;
  flex-direction: row;

  font-size: 24px;
  font-weight: 700;

  margin-bottom: 32px;

  gap: 8px;

  span {
    color: ${(props) => props.theme.colors.system_blue[20]};
  }
`;

const MilestoneTaskPreviewer = styled.div`
  width: 100%;
  padding: 24px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.gray[10]};
  border: 1px solid ${({ theme }) => theme.colors.gray[30]};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05);
`;

const MilestoneTaskPreviewerButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 14px;

  border-bottom: 1px solid ${(props) => props.theme.colors.gray[20]};
`;

export {
  MilestoneContainer,
  MilestoneHeader,
  MilestoneHeaderBack,
  MilestoneHeaderButtonWrapper,
  MilestoneHeaderTeamName,
  MilestoneContent,
  MilestoneContentHeaderText,
  MilestoneTaskSection,
  MilestoneTaskList,
  MilestoneTaskListHeaderText,
  MilestoneTaskPreviewer,
  MilestoneTaskPreviewerButtonWrapper,
};
