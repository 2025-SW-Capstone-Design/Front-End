import React from 'react';
import * as S from './EmailTag.styles';
import { ReactComponent as X } from '../../assets/icon/X_small.svg';
import type { EmailTagProps } from './EmailTag.types';

function EmailTag({ email, onRemove }: EmailTagProps) {
  return (
    <S.EmailTagWrapper>
      <S.Email>{email}</S.Email>
      <S.RemoveButton onClick={onRemove}>
        <X />
      </S.RemoveButton>
    </S.EmailTagWrapper>
  );
}

export default EmailTag;
