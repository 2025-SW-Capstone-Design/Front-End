import React, { useState } from 'react';
import * as S from './Label.styles';
import type { LabelProps } from './Label.types';

function Label({ position, isClickable }: LabelProps) {
  const [isSelected, setIsSelected] = useState(false);

  const handleLabelClick = () => {
    if (isClickable) {
      setIsSelected((prev) => !prev); // 클릭 시 선택 상태 토글
    }
  };

  return (
    <S.LabelContainer
      position={position}
      isSelected={isSelected}
      isClickable={isClickable}
      onClick={handleLabelClick}
    >
      {position}
    </S.LabelContainer>
  );
}

export default Label;
