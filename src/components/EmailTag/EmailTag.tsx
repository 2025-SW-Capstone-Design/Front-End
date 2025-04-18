import React from 'react';
import * as S from './EmailTag.styles';
import { ReactComponent as X } from '../../assets/icon/X_small.svg';

function EmailTag() {
  return (
    <S.EmailTagWrapper>
      <S.Email>email@gmail.com</S.Email>
      <S.RemoveButton>
        <X />
      </S.RemoveButton>
    </S.EmailTagWrapper>
  );
}

export default EmailTag;
