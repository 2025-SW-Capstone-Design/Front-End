import React, { useState } from 'react';
import * as S from './DropdownLabel.styles';
import type { LabelProps, PositionType } from '../Label.types';
import { ReactComponent as DropdownIcon } from '../../../assets/icon/drop_small.svg';
import DropdownLabelMenu from './DropdownLabelMenu';

function DropdownLabel({ position }: LabelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] =
    useState<PositionType>(position);

  console.log(selectedPosition);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (newPosition: PositionType) => {
    setSelectedPosition(newPosition);
    setIsOpen(false); // 선택 후 드롭다운 닫기
  };
  return (
    <S.DropdownLabelWrapper>
      <S.DropdownLabelContainer
        position={selectedPosition}
        onClick={toggleDropdown}
      >
        <S.DropdownLabelPosition>{selectedPosition}</S.DropdownLabelPosition>
        <DropdownIcon />
      </S.DropdownLabelContainer>
      {isOpen && <DropdownLabelMenu onSelect={handleSelect} />}
    </S.DropdownLabelWrapper>
  );
}

export default DropdownLabel;
