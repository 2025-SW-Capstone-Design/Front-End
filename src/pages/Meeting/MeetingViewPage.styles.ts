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
};
