import styled from '@emotion/styled';

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
`;

// styled.div``;
const CalendarHeader = styled.div`
  display: flex;
  flex-direction: column;

  padding: 72px 48px 36px 48px;
  flex-shrink: 0;
`;

const CalendarHeaderBack = styled.div`
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

const CalendarHeaderTeamName = styled.div`
  font-size: 32px;
  font-weight: 800;
`;

const CalendarHeaderButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;

  height: 52px;
  gap: 24px;

  align-items: center;
  align-self: stretch;
`;

const CalendarMainContent = styled.div`
  display: flex;
  flex-direction: column;

  padding: 24px 0px;
`;

const CalendarMainContentText = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export {
  CalendarContainer,
  CalendarHeader,
  CalendarHeaderBack,
  CalendarHeaderTeamName,
  CalendarHeaderButtonWrapper,
  CalendarMainContent,
  CalendarMainContentText,
};
