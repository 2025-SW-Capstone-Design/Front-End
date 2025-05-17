import styled from '@emotion/styled';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  background: #f9f9f9;

  border-radius: 16px;
`;

const GlobalCalendarStyle = styled.div`
  .rbc-calendar {
    display: flex;
    flex-direction: column;

    border-radius: 20px;
    height: 72vh;
  }

  .rbc-row {
    display: flex;
    flex-direction: row;

    flex-shrink: 0;
  }

  .rbc-month-header {
    display: flex;

    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .rbc-header {
    width: fit-content;
    height: fit-content;

    font-size: 22px;
    font-weight: 600;

    padding: 12px 0;
    background-color: ${(props) => props.theme.colors.primary[10]};
  }

  .rbc-day-bg {
    background-color: #fff;
  }

  .rbc-button-link {
    font-size: 24px;
    font-weight: 600;
    padding: 4px;
  }

  .rbc-today {
    background: ${(props) => props.theme.colors.primary[10]};
  }

  .rbc-event {
    display: flex;
    align-items: center;

    margin: 3px 0;
    height: 25px;
  }

  .rbc-event-content {
    display: flex;
    color: #000000;
    align-items: center;
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  z-index: 900;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 1001;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 642px;
  height: auto;
  background-color: white;
  outline: 1px solid ${({ theme }) => theme.colors.gray[30]};
  outline-offset: -1px;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.div`
  color: black;
  ${({ theme }) => theme.text.titleM_bold};
`;

const ModalDescription = styled.div`
  min-height: 200px;
  font-size: 22px;
`;

const ModalInfoSection = styled.div`
  margin-top: 16px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.gray[10]};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray[80]};

  & > span:first-of-type {
    font-weight: 600;
    margin-right: 8px;
    min-width: 60px;
    color: ${({ theme }) => theme.colors.gray[70]};
  }
`;

export {
  ModalBackground,
  ModalHeader,
  ModalTitle,
  ModalWrapper,
  CalendarWrapper,
  GlobalCalendarStyle,
  ModalDescription,
  InfoItem,
  ModalInfoSection,
};
