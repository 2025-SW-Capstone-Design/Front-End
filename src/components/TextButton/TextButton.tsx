import React from 'react';
import type { TextButtonProps } from './TextButton.types';
import * as S from './TextButton.styles';

function TextButton({ buttonType, children, ...props }: TextButtonProps) {
  switch (buttonType) {
    case 'primary':
      return <S.PrimaryTextButton {...props}>{children}</S.PrimaryTextButton>;
    case 'secondary':
      return (
        <S.SecondaryTextButton {...props}>{children}</S.SecondaryTextButton>
      );
    default:
      return null;
  }
}

export default TextButton;
