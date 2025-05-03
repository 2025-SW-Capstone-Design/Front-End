import React from 'react';
import type { IconButtonProps } from './IconButton.types';
import * as S from './IconButton.styles';

{
  /* <IconButton buttonType="secondary">
<img src={plus} alt="" />팀 생성하기
</IconButton> */
}
function IconButton({ buttonType, children, ...props }: IconButtonProps) {
  switch (buttonType) {
    case 'primary':
      return (
        <S.iconPrimaryButton {...props}>
          <S.iconButtonContent>{children}</S.iconButtonContent>
        </S.iconPrimaryButton>
      );
    case 'secondary':
      return (
        <S.iconSecondaryButton {...props}>
          <S.iconButtonContent>{children}</S.iconButtonContent>
        </S.iconSecondaryButton>
      );
    case 'tertiary':
      return (
        <S.iconTertiaryButton {...props}>
          <S.iconButtonContent>{children}</S.iconButtonContent>
        </S.iconTertiaryButton>
      );

    default:
      return null;
  }
}

export default IconButton;
