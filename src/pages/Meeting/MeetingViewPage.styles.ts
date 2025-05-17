import styled from '@emotion/styled';

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
`;

const ViewHeader = styled.div`
  display: flex;
  flex-direction: column;

  padding: 24px 48px;
  flex-shrink: 0;
  gap: 12px;
`;

const ViewHeaderBack = styled.div`
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

const ViewHeaderRoomName = styled.div`
  font-size: 32px;
  font-weight: 800;
`;

const ViewHeaderButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;

  height: 52px;
  gap: 24px;

  align-items: center;
  align-self: stretch;
`;

const ViewWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
`;

const ViewScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;
`;

const ViewScreenList = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 23vh;
  padding: 24px;

  border-top: 1px solid ${(props) => props.theme.colors.gray[40]};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[40]};

  gap: 12px;

  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ViewMainScreenWrapper = styled.div`
  display: flex;
  padding: 24px;

  width: 100%;
  height: fit-content;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.gray[30]};
`;

const ViewInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 30%;
`;

const ViewTeamMembersWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const ViewTeamMembersHeader = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--Gray-20, #eff2f5);
  background: var(--White, #fff);
  font-size: 20px;
  font-weight: 700;
`;

const ViewTeamMemberList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;
  padding: 12px;
  background: var(--Gray-20, #eff2f5);
  min-height: 300px;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ViewTeamMemberInfo = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  align-items: center;

  text-align: center;
  img {
    width: 24px;
    height: 24px;

    margin-right: 12px;
  }

  span {
    font-size: 16px;
    font-weight: 700;
  }
`;

const ViewTeamMemberPosition = styled.div`
  margin-left: auto;
`;

const ViewMilestoneList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;
  padding: 12px;
  background: var(--Gray-20, #eff2f5);
  min-height: 740px;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export {
  ViewContainer,
  ViewHeader,
  ViewHeaderBack,
  ViewHeaderButtonWrapper,
  ViewHeaderRoomName,
  ViewWrapper,
  ViewScreenWrapper,
  ViewScreenList,
  ViewMainScreenWrapper,
  ViewInfoWrapper,
  ViewTeamMembersWrapper,
  ViewTeamMembersHeader,
  ViewTeamMemberList,
  ViewTeamMemberInfo,
  ViewTeamMemberPosition,
  ViewMilestoneList,
};
