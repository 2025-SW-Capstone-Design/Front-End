import React, { useState } from 'react';
import ModalPortal from '../Modal/ModalPortal';
import * as S from './ManageTeamModal.styles';
import Button from '../Button/Button';
import IconButton from '../IconButton/IconButton';
import EmailTag from '../EmailTag/EmailTag';
import { isValidEmail } from '../../utils/emailValidation';
import Input from '../Input/Input';
import ManageTeamMember from '../ManageTeamMember/ManageTeamMember';

function ManageTeamModal() {
  const [emails, setEmails] = useState<string[]>([]);
  const [emailInput, setEmailInput] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [emailStatus, setEmailStatus] = useState<
    'default' | 'error' | 'success'
  >('default');

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
                  if (e.key === 'Enter') handleAddEmail(); // Enter 키로 추가
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
                <ManageTeamMember />
                <ManageTeamMember />
                <ManageTeamMember />
                <ManageTeamMember />
                <ManageTeamMember />
              </S.ModifyPositionContent>
            </S.ModifyPositionContainer>
          </S.ModalContent>
          <S.ModalFooter>
            <Button buttonType="soft" width="120px">
              취소
            </Button>
            <IconButton buttonType="primary" width="120px">
              팀 생성하기
            </IconButton>
          </S.ModalFooter>
        </S.ModalWrapper>
      </S.ModalBackground>
    </ModalPortal>
  );
}

export default ManageTeamModal;
