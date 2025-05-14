import React from 'react';
import * as S from './JoinTeamModal.styles';
import ModalPortal from '../Modal/ModalPortal';
import type { JoinTeamModalProps } from './JoinTeamModal.types';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { joinTeam } from '../../apis/team/team';
import { useNavigate } from 'react-router-dom';

const JoinTeamModal = ({ onClose }: JoinTeamModalProps) => {
  const navigate = useNavigate();
  const [intiveCode, setInviteCode] = React.useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInviteCode(e.target.value);
  };

  const submitInviteCode = async (invitationCode: string) => {
    await joinTeam()
      .setData({ invitationCode })
      .execute()
      .then((response) => {
        alert('팀에 성공적으로 참가했습니다.');
        navigate(`/team/${response.data}`);
        onClose();
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert('잘못된 초대 코드입니다.');
        } else {
          alert('팀 참가에 실패했습니다. 다시 시도해주세요.');
        }
      });
  };

  return (
    <ModalPortal>
      <S.ModalBackground>
        <S.ModalWrapper>
          <S.ModalHeader>
            <S.ModalTitle>팀에 참가하기</S.ModalTitle>
            <S.ModalSubTitle>팀 초대 코드를 입력해주세요.</S.ModalSubTitle>
          </S.ModalHeader>
          <Input
            width="100%"
            placeholder="초대 코드 입력"
            value={intiveCode}
            onChange={handleInputChange}
          />
          <S.ModalButtonWrapper>
            <Button width="120px" buttonType="secondary" onClick={onClose}>
              취소
            </Button>
            <Button
              width="120px"
              buttonType="tertiary"
              onClick={() => submitInviteCode(intiveCode)}
            >
              확인
            </Button>
          </S.ModalButtonWrapper>
        </S.ModalWrapper>
      </S.ModalBackground>
    </ModalPortal>
  );
};

export default JoinTeamModal;
