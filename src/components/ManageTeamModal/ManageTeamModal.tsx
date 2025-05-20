import React, { useState } from 'react';
import ModalPortal from '../Modal/ModalPortal';
import * as S from './ManageTeamModal.styles';
import Button from '../Button/Button';
import IconButton from '../IconButton/IconButton';
import EmailTag from '../EmailTag/EmailTag';
import { isValidEmail } from '../../utils/emailValidation';
import Input from '../Input/Input';
import ManageTeamMember from '../ManageTeamMember/ManageTeamMember';
import type { ManageTeamModalProps } from './ManageTeamModal.types';
import {
  generateInvitationCode,
  sendTeamInvitationEmail,
} from '../../apis/team/team';
import { useParams } from 'react-router-dom';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import { getMemberDetail } from '../../apis/member/member';

function ManageTeamModal({
  onClose,
  teamMembers,
  refetchMembers,
}: ManageTeamModalProps) {
  const { teamId } = useParams();
  const [emails, setEmails] = useState<string[]>([]);
  const [emailInput, setEmailInput] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [emailStatus, setEmailStatus] = useState<
    'default' | 'error' | 'success'
  >('default');

  const { data: myMember } = useApiQuery(getMemberDetail(), ['myMember']);

  const isCurrentUserLeader =
    teamMembers.find((member) => member.memberId === myMember?.id)?.role ===
    'ROLE_LEADER';

  const handleAddEmail = () => {
    const validation = isValidEmail(emailInput);

    if (!validation.isValid) {
      setErrorMessage(validation.message || '유효하지 않은 이메일입니다.');
      setEmailStatus('error');
      return;
    }

    if (emails.includes(emailInput)) {
      setErrorMessage('이미 추가된 이메일입니다.');
      setEmailStatus('error');
      return;
    }

    setEmails((prevEmails) => [...prevEmails, emailInput]);
    setEmailInput('');
    setErrorMessage('');
    setEmailStatus('success');
  };

  const handleRemove = (emailToRemove: string) => {
    setEmails((prevEmails) =>
      prevEmails.filter((email) => email !== emailToRemove),
    );
  };

  const handleSendInvitations = async () => {
    if (emails.length === 0) {
      onClose();
      return;
    }

    try {
      await generateInvitationCode(Number(teamId)).execute();
      await sendTeamInvitationEmail(Number(teamId))
        .setData({ emails })
        .execute();
      alert('초대 이메일이 성공적으로 전송되었습니다.');
    } catch (err) {
      console.error('Failed to send invitation emails:', err);
      alert('초대 이메일 전송에 실패했습니다.');
    } finally {
      onClose();
    }
  };

  return (
    <ModalPortal>
      <S.ModalBackground>
        <S.ModalWrapper>
          <S.ModalHeader>
            <S.ModalTitle>팀원 관리</S.ModalTitle>
            <S.ModalSubTitle>
              함께 일할 새로운 멤버를 초대하세요
            </S.ModalSubTitle>
          </S.ModalHeader>
          <S.ModalContent>
            <S.InputContainer>
              <S.InputLabel>새 팀원 초대</S.InputLabel>
              <Input
                width="100%"
                placeholder="이메일을 입력하세요"
                value={emailInput}
                status={emailStatus}
                message={errorMessage}
                onChange={(e) => setEmailInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleAddEmail();
                }}
              />
              <S.EmailTagContainer>
                {emails.map((email) => (
                  <EmailTag
                    key={email}
                    email={email}
                    onRemove={() => handleRemove(email)}
                  />
                ))}
              </S.EmailTagContainer>
            </S.InputContainer>

            <S.ModifyPositionContainer>
              <S.ModifyPositionLabel>역할 수정</S.ModifyPositionLabel>
              <S.ModifyPositionContent>
                {teamMembers.map((teamMember) => (
                  <ManageTeamMember
                    key={teamMember.memberId}
                    info={teamMember}
                    isLeader={isCurrentUserLeader}
                    refetchMembers={refetchMembers}
                  />
                ))}
              </S.ModifyPositionContent>
            </S.ModifyPositionContainer>
          </S.ModalContent>

          <S.ModalFooter>
            <Button buttonType="soft" width="120px" onClick={onClose}>
              취소
            </Button>
            <IconButton
              buttonType="primary"
              width="120px"
              onClick={handleSendInvitations}
            >
              확인
            </IconButton>
          </S.ModalFooter>
        </S.ModalWrapper>
      </S.ModalBackground>
    </ModalPortal>
  );
}

export default ManageTeamModal;
