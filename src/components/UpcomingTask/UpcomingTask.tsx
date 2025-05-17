import React from 'react';
import * as S from './UpcomingTask.styles';
import type { UpcomingTaskProps } from './UpcomingTask.types';

const UpcomingTask = ({ issue, dueDate }: UpcomingTaskProps) => {
  const formatCustomDateTime = (isoString: string) => {
    const date = new Date(isoString + 'Z');

    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

    return (
      <S.UpcomingTaskHedaerDateWrapper>
        <S.UpcomingTaskHedaerDate>
          {month}.{day}
        </S.UpcomingTaskHedaerDate>
        <S.UpcomingTaskHedaerTime>
          {hours}:{minutes}
          {ampm}
        </S.UpcomingTaskHedaerTime>
      </S.UpcomingTaskHedaerDateWrapper>
    );
  };

  return (
    <>
      <S.UpcomingTaskContainer>
        <S.UpcomingTaskHedaer>
          {formatCustomDateTime(dueDate)}
          <S.UpcomingTaskStatusWrapper>
            <S.UpcomingTaskStatus>긴급</S.UpcomingTaskStatus>
            <S.UpcomingTaskCircle />
          </S.UpcomingTaskStatusWrapper>
        </S.UpcomingTaskHedaer>
        <S.UpcomingTaskContent>{issue.title}</S.UpcomingTaskContent>
      </S.UpcomingTaskContainer>
    </>
  );
};

export default UpcomingTask;
