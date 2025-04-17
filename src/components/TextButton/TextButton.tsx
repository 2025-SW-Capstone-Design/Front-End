import React from 'react';
import type { TextButtonProps } from './TextButton.types';
import * as S from './TextButton.styles';

function TextButton({ children, ...props }: TextButtonProps) {
  return <S.TextButton {...props}>{children}</S.TextButton>;
}

export default TextButton;
