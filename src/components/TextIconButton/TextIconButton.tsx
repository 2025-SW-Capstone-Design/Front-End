import React from 'react';
import type { TextIconButtonProps } from './TextIconButton.types';
import * as S from './TextIconButton.styles';
import TextButton from '../TextButton/TextButton';

function TextIconButton({
  buttonType,
  children,
  icon: Icon,
  iconPosition = 'left', //기본 값 left
  ...props
}: TextIconButtonProps) {
  switch (buttonType) {
    case 'primary':
      return (
        <S.TextIconPrimaryButton {...props}>
          <S.TextIconButtonContent>
            {iconPosition === 'left' && Icon && <Icon />}
            <TextButton buttonType="primary">{children}</TextButton>
            {iconPosition === 'right' && Icon && <Icon />}
          </S.TextIconButtonContent>
        </S.TextIconPrimaryButton>
      );
    case 'secondary':
      return (
        <S.TextIconSecondaryButton {...props}>
          <S.TextIconButtonContent>
            {iconPosition === 'left' && Icon && <Icon />}
            <TextButton buttonType="secondary">{children}</TextButton>
            {iconPosition === 'right' && Icon && <Icon />}
          </S.TextIconButtonContent>
        </S.TextIconSecondaryButton>
      );
    default:
      return null;
  }
}

export default TextIconButton;
