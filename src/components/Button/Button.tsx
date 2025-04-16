import React from 'react';
import type { ButtonProps } from './Button.types';
import * as S from './Button.styles';

// <Button buttonType="tertiary">가나다라</Button> : 기본 228px 버튼 , 색 tertiary
// <Button buttonType="primary" width="300px">가나다라</Button> : 300px 버튼, 색 primary

function Button({ buttonType, children, ...props }: ButtonProps) {
  switch (buttonType) {
    case 'primary':
      return <S.primaryButton {...props}>{children}</S.primaryButton>;
    case 'soft':
      return <S.softButton {...props}>{children}</S.softButton>;
    case 'secondary':
      return <S.secondaryButton {...props}>{children}</S.secondaryButton>;
    case 'tertiary':
      return <S.tertiaryButton {...props}>{children}</S.tertiaryButton>;

    default:
      return null;
  }
}

export default Button;
