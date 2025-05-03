import React from 'react';
import * as S from './StartMeetingModal.styles';
import ModalPortal from '../Modal/ModalPortal';
import Input from '../Input/Input';
import IconButton from '../IconButton/IconButton';

function StartMeetingModal() {
  return (
    <ModalPortal>
      <S.ModalBackground>
        <S.ModalWrapper>
          <S.ModalHeader>
            <S.ModalTitle>새 회의 시작</S.ModalTitle>
            <S.ModalSubtitle>
              새로운 회의를 예약하거나 시작합니다.
            </S.ModalSubtitle>
          </S.ModalHeader>
          <S.MeetingInfo>
            <S.MeetingName>회의 이름</S.MeetingName>
            <Input placeholder="회의 이름을 입력하세요." width="100%" />
          </S.MeetingInfo>
          <S.MeetingTimeWrapper>
            <S.MeetingTimeTitle>회의 시간</S.MeetingTimeTitle>
          </S.MeetingTimeWrapper>
          <S.ButtonContainer>
            <IconButton buttonType="primary" width="120px">
              저장하기
            </IconButton>
          </S.ButtonContainer>
        </S.ModalWrapper>
      </S.ModalBackground>
    </ModalPortal>
  );
}

export default StartMeetingModal;
