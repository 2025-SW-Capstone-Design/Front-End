import React from 'react';
import type { TextIconButtonProps } from './TextIconButton.types';
import * as S from './TextIconButton.styles';
import TextButton from '../TextButton/TextButton';

function TextIconButton({
  buttonType,
  children,
  icon: Icon,
  ...props
}: TextIconButtonProps) {
  switch (buttonType) {
    case 'primary':
      return (
        <S.TextIconPrimaryButton {...props}>
          <S.TextIconButtonContent>
            {Icon && <Icon />}
            <TextButton buttonType="primary">{children}</TextButton>
          </S.TextIconButtonContent>
        </S.TextIconPrimaryButton>
      );
    case 'secondary':
      return (
        <S.TextIconSecondaryButton {...props}>
          <S.TextIconButtonContent>
            {Icon && <Icon />}
            <TextButton buttonType="secondary">{children}</TextButton>
          </S.TextIconButtonContent>
        </S.TextIconSecondaryButton>
      );
    default:
      return null;
  }
}

export default TextIconButton;
