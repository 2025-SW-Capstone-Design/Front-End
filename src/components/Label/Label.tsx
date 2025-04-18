import React from 'react';
import * as S from './Label.styles';
import type { LabelProps } from './Label.types';

function Label({ position }: LabelProps) {
  return <S.LabelContainer position={position}>{position}</S.LabelContainer>;
}

export default Label;
