import styled from '@emotion/styled';

const MeetingPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
`;

const MeetingPageHeader = styled.div`
  display: flex;
  flex-direction: column;

  padding: 72px 48px 36px 48px;
  flex-shrink: 0;
`;

const MeetingPageHeaderBack = styled.div`
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

const MeetingPageHeaderText = styled.div`
  font-size: 32px;
  font-weight: 800;
`;

const MeetingPageHeaderButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;

  height: 52px;
  gap: 24px;

  align-items: center;
  align-self: stretch;
`;

const MeetingListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 75vh;
  gap: 12px;
  padding: 48px;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export {
  MeetingPageContainer,
  MeetingPageHeader,
  MeetingPageHeaderBack,
  MeetingPageHeaderButtonWrapper,
  MeetingPageHeaderText,
  MeetingListContainer,
};
