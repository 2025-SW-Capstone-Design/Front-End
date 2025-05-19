import styled from '@emotion/styled';

const MeetingLogContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
`;

// styled.div``;
const MeetingLogHeader = styled.div`
  display: flex;
  flex-direction: column;

  padding: 72px 48px 36px 48px;
  flex-shrink: 0;
`;

const MeetingLogHeaderBack = styled.div`
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

const MeetingLogHeaderName = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

const MeetingLogHeaderButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  height: 52px;
  gap: 24px;

  align-items: center;
`;

const MeetingLogContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: calc(100vh - 108px);

  padding: 24px 48px 0px 48px;
  height: 80vh;
`;

const MeetingLogContentTopText = styled.div`
  color: ${(props) => props.theme.colors.gray[90]};
  font-size: 22px;
  font-weight: 700;

  span {
    color: ${(props) => props.theme.colors.primary[40]};
    font-size: 22px;
    font-weight: 700;
  }
`;

const MeetingLogListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 40px;

  width: 100%;
  flex-wrap: wrap;

  gap: 30px;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export {
  MeetingLogContainer,
  MeetingLogHeader,
  MeetingLogHeaderBack,
  MeetingLogHeaderButtonWrapper,
  MeetingLogHeaderName,
  MeetingLogContentTopText,
  MeetingLogContentWrapper,
  MeetingLogListWrapper,
};
