import styled from '@emotion/styled';

const TeamPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
`;

const TeamPageHeader = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 220px;
  padding: 72px 48px 36px 48px;

  flex-shrink: 0;
`;

const TeamPageHeaderTeamName = styled.div`
  font-size: 48px;
  font-weight: 800;
`;

const TeamPageHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;

  height: 52px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const TeamPageHeaderButtonText = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.gray[80]};
`;

const TeamPageHeaderButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;

  height: 52px;
  align-items: center;
  gap: 24px;
`;

const TeamPageMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;

  gap: 30px;
  align-items: center;
  padding: 24px 48px 48px 48px;
`;

const TeamPageContentWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: fit-content;

  padding: 0 48px;
`;

const TeamPageGantt = styled.div`
  width: 50vw;
  margin-right: auto;
`;

const TeamPageTaskList = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
`;

const TeamPageTaskListTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

const TeamPageTaskListContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 29vw;
  margin-top: 32px;

  height: 50vh + 10vw;
  gap: 20px;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export {
  TeamPageContainer,
  TeamPageHeader,
  TeamPageHeaderTeamName,
  TeamPageHeaderWrapper,
  TeamPageHeaderButtonText,
  TeamPageHeaderButtonWrapper,
  TeamPageMenuWrapper,
  TeamPageContentWrapper,
  TeamPageGantt,
  TeamPageTaskList,
  TeamPageTaskListTitle,
  TeamPageTaskListContent,
};
