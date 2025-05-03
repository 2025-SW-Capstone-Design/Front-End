import React, { useState } from 'react';
import ModalPortal from '../Modal/ModalPortal';
import * as S from './CreateTeamModal.styles';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';
import IconButton from '../IconButton/IconButton';
import EmailTag from '../EmailTag/EmailTag';
import { isValidEmail } from '../../utils/emailValidation';

function CreateTeamModal() {
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
            <S.ModalTitle>팀 생성하기</S.ModalTitle>
            <S.ModalSubTitle>
              함께 일할 새로운 협업 팀을 생성하고 멤버를 초대하세요.
            </S.ModalSubTitle>
          </S.ModalHeader>
          <S.ModalContent>
            <S.InputContainer>
              <S.InputLabel>팀 이름</S.InputLabel>
              <Input width="100%" placeholder="팀 이름을 알려주세요." />
            </S.InputContainer>
            <S.InputContainer>
              <S.InputLabel>Github Organization 불러올게요.</S.InputLabel>
              <Input
                width="100%"
                placeholder="Organization account name을 입력하세요"
              />
            </S.InputContainer>
            <S.InputContainer>
              <S.InputLabel>프로젝트 설명</S.InputLabel>
              <TextArea
                width="100%"
                height="69px"
                placeholder="프로젝트의 간략한 설명을 입력하세요."
              />
            </S.InputContainer>
            <S.InputContainer>
              <S.InputLabel>팀원 초대 (이메일)</S.InputLabel>
              <Input
                width="100%"
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

export default CreateTeamModal;
