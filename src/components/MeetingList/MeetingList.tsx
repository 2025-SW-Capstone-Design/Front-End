import React from 'react';
import * as S from './MeetingList.styles';
import type { MeetingListProps } from './MeetingList.types';
import SubButton from '../SubButton/SubButton';

function MeetingList({ title, time, width }: MeetingListProps) {
  return (
    <S.MeetingListWrapper width={width}>
      <S.MeetingListInfo>
        <S.MeetingTime>{time}</S.MeetingTime>
        <S.MeetingTitle>{title}</S.MeetingTitle>
      </S.MeetingListInfo>
      <S.ButtonContainer>
        <SubButton buttonType="primary">회의록 보기</SubButton>
        <SubButton buttonType="default">회의 참여하기</SubButton>
      </S.ButtonContainer>
    </S.MeetingListWrapper>
  );
}

export default MeetingList;
