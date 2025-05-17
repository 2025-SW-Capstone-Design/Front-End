import styled from '@emotion/styled';

const UpcomingTaskContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 28px 24px;

  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.gray[10]};

  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.colors.gray[30]};
  }
`;

const UpcomingTaskHedaer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const UpcomingTaskHedaerDateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const UpcomingTaskHedaerDate = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

const UpcomingTaskHedaerTime = styled.div`
  color: ${(props) => props.theme.colors.gray[70]};
  font-size: 14px;
  font-weight: 500;
`;

const UpcomingTaskStatusWrapper = styled.div`
  display: flex;
  flex-direction: row;

  gap: 8px;
  padding: 0px 12px;

  align-items: center;
  justify-content: center;
`;

const UpcomingTaskStatus = styled.div`
  color: ${(props) => props.theme.colors.red[50]};
  font-size: 14px;
  font-weight: 700;
`;

const UpcomingTaskCircle = styled.div`
  width: 12px;
  height: 12px;
  aspect-ratio: 1/1;
  border-radius: 1000px;
  background: ${(props) => props.theme.colors.red[50]};
`;

const UpcomingTaskContent = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 500;
`;

export {
  UpcomingTaskContainer,
  UpcomingTaskHedaer,
  UpcomingTaskHedaerDateWrapper,
  UpcomingTaskHedaerDate,
  UpcomingTaskHedaerTime,
  UpcomingTaskStatus,
  UpcomingTaskCircle,
  UpcomingTaskStatusWrapper,
  UpcomingTaskContent,
};
