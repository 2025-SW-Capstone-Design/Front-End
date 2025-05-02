import React from 'react';
import * as S from './Modal.styles';
import ModalPortal from './ModalPortal';
import type { ModalProps } from './Modal.types';
import Button from '../Button/Button';
import IconButton from '../IconButton/IconButton';

function Modal({
  title,
  leftButtonText,
  rightButtonText,
  rightButtonIcon,
  onLeftButtonClick,
  onRightButtonClick,
}: ModalProps) {
  return (
    <ModalPortal>
      <S.ModalBackground>
        <S.ModalWrapper>
          <S.ModalTitle>{title}</S.ModalTitle>
          <S.ButtonContainer>
            <Button buttonType="soft" width="140px" onClick={onLeftButtonClick}>
              {leftButtonText}
            </Button>
            <IconButton
              buttonType="tertiary"
              width="140px"
              onClick={onRightButtonClick}
            >
              {rightButtonIcon && <img src={rightButtonIcon} alt="" />}
              {rightButtonText}
            </IconButton>
          </S.ButtonContainer>
        </S.ModalWrapper>
      </S.ModalBackground>
    </ModalPortal>
  );
}

export default Modal;
