import React from 'react';
import * as S from './SubButton.styles';
import type { SubButtonProps } from './SubButton.types';

function SubButton({
  buttonType,
  children,
  disabled,
  ...props
}: SubButtonProps) {
  switch (buttonType) {
    case 'primary':
      return (
        <S.PrimarySubButton disabled={disabled} {...props}>
          {children}
        </S.PrimarySubButton>
      );
    case 'default':
      return (
        <S.defaultSubButton disabled={disabled} {...props}>
          {children}
        </S.defaultSubButton>
      );
    default:
      return null;
  }
}

export default SubButton;
