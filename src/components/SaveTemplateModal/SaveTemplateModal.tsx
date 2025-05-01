import React from 'react';
import ModalPortal from '../Modal/ModalPortal';
import * as S from './SaveTemplateModal.styles';
import Button from '../Button/Button';
import IconButton from '../IconButton/IconButton';
import aiPen from '../../assets/icon/aipen.svg';

function SaveTemplateModal() {
  return (
    <ModalPortal>
      <S.ModalBackground>
        <S.ModalWrapper>
          <S.ModalTitle>Task 템플릿이 저장되었습니다</S.ModalTitle>
          <S.ButtonContainer>
            <Button buttonType="soft" width="140px">
              종료
            </Button>
            <IconButton buttonType="tertiary" width="140px">
              <img src={aiPen} alt="" />
              템플릿 보기
            </IconButton>
          </S.ButtonContainer>
        </S.ModalWrapper>
      </S.ModalBackground>
    </ModalPortal>
  );
}

export default SaveTemplateModal;
