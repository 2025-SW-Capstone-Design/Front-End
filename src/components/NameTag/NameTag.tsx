import React from 'react';
import * as S from './NameTag.styles';
import type { NameTagProps } from './NameTag.types';

function NameTag({ name, position }: NameTagProps) {
  return (
    <S.NameTagWrapper>
      <S.Name>{name}</S.Name>
      <S.Divider />
      <S.Position>{position}</S.Position>
    </S.NameTagWrapper>
  );
}

export default NameTag;
