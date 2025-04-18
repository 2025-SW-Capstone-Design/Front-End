import React from 'react';
import type { TextAreaProps } from './TextArea.types';
import * as S from './TextArea.styles';

// 프로젝트 설명같은 긴 input은 placeholder가 무조건 가운데 정렬돼서 제작
function TextArea({ placeholder, width, height, ...props }: TextAreaProps) {
  return (
    <S.TextAreaWrapper
      placeholder={placeholder}
      width={width}
      height={height}
      {...props}
    />
  );
}

export default TextArea;
