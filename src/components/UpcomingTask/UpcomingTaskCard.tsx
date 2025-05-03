import React from 'react';
import * as S from './UpcomingTaskCard.styles';
import type { UpcomingTaskCardProps } from './UpcomingTask.types';
import { ReactComponent as DotIcon } from '../../assets/icon/dot.svg';

function UpcomingTaskCard({ status }: UpcomingTaskCardProps) {
  return (
    <S.CardContainer>
      <S.LeftInfo>
        <S.Deadline>
          <S.DeadlineDay>04.06</S.DeadlineDay>
          <S.DeadlineTime>14:00 PM</S.DeadlineTime>
        </S.Deadline>
        <S.TaskName>로그인 페이지 Ui 개선</S.TaskName>
      </S.LeftInfo>
      <S.IconContainer status={status}>
        <S.IconText>{status}</S.IconText>
        <DotIcon />
      </S.IconContainer>
    </S.CardContainer>
  );
}

export default UpcomingTaskCard;
