import React from 'react';
import * as S from './UpcomingTask.styles';
import TextIconButton from '../TextIconButton/TextIconButton';
import { ReactComponent as ArrowRightSmall } from '../../assets/icon/arrow_right_small.svg';
import UpcomingTaskCard from './UpcomingTaskCard';

function UpcomingTask() {
  return (
    <S.UpcomingTaskContainer>
      <S.UpcomingTaskHeader>
        마감이 다가오는 Task
        <TextIconButton
          buttonType="primary"
          icon={ArrowRightSmall}
          iconPosition="right"
        >
          내 Task 보기
        </TextIconButton>
      </S.UpcomingTaskHeader>
      <S.UpcomingTaskContent>
        <UpcomingTaskCard status="보통" />
        <UpcomingTaskCard status="긴급" />
        <UpcomingTaskCard status="적정" />
        <UpcomingTaskCard status="보통" />
      </S.UpcomingTaskContent>
    </S.UpcomingTaskContainer>
  );
}

export default UpcomingTask;
