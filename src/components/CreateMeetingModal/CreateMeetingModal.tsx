import React from 'react';
import * as S from './CreateMeetingModal.styles';
import type { CreateMeetingModalProps } from './CreateMeetingModal.types';
import { useNavigate } from 'react-router-dom';
import ModalPortal from '../Modal/ModalPortal';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { issuedToken } from '../../apis/meeting/meeting';

const CreateMeetingModal = ({ onClose, teamId }: CreateMeetingModalProps) => {
  const navigate = useNavigate();
  const [chatRoomName, setChatRoomName] = React.useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatRoomName(e.target.value);
  };

  const generateMeeting = () => {
    navigate(`/team/${teamId}/meeting/${chatRoomName}`);
  };

  return (
    <ModalPortal>
      <S.ModalBackground>
        <S.ModalWrapper>
          <S.ModalHeader>
            <S.ModalTitle>미팅 시작 하기</S.ModalTitle>
            <S.ModalSubTitle>미팅 이름을 입력해주세요.</S.ModalSubTitle>
          </S.ModalHeader>
          <Input
            width="100%"
            placeholder="마팅 이름 입력"
            value={chatRoomName}
            onChange={handleInputChange}
          />
          <S.ModalButtonWrapper>
            <Button width="120px" buttonType="secondary" onClick={onClose}>
              취소
            </Button>
            <Button
              width="120px"
              buttonType="tertiary"
              onClick={generateMeeting}
            >
              확인
            </Button>
          </S.ModalButtonWrapper>
        </S.ModalWrapper>
      </S.ModalBackground>
    </ModalPortal>
  );
};

export default CreateMeetingModal;
