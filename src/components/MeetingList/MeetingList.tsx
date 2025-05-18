import React from 'react';
import * as S from './MeetingList.styles';
import type { MeetingListProps } from './MeetingList.types';
import SubButton from '../SubButton/SubButton';
import { useNavigate } from 'react-router-dom';

function MeetingList({ teamId, data, width }: MeetingListProps) {
  const navigate = useNavigate();

  return (
    <S.MeetingListWrapper width={width}>
      <S.MeetingListInfo>
        <S.MeetingTitle>
          {data.title}
          <span>{!data.active && ' - (종료된 회의)'}</span>
        </S.MeetingTitle>
      </S.MeetingListInfo>
      <S.ButtonContainer>
        <SubButton
          buttonType="default"
          disabled={!data.active}
          onClick={() => navigate(`/team/${teamId}/meeting/${data.title}`)}
        >
          회의 참여하기
        </SubButton>
      </S.ButtonContainer>
    </S.MeetingListWrapper>
  );
}

export default MeetingList;
