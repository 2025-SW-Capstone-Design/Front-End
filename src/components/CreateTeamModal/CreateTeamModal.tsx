import React from 'react';
import ModalPortal from '../Modal/ModalPortal';
import * as S from './CreateTeamModal.styles';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';
import IconButton from '../IconButton/IconButton';
import EmailTag from '../EmailTag/EmailTag';

function CreateTeamModal() {
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
              <Input width="100%" />
              <S.EmailTagContainer>
                <EmailTag></EmailTag>
                <EmailTag></EmailTag>
                <EmailTag></EmailTag>
                <EmailTag></EmailTag>
              </S.EmailTagContainer>
            </S.InputContainer>
          </S.ModalContent>
          <S.ModalFooter>
            <Button buttonType="tertiary" width="120px">
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
