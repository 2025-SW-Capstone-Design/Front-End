import React, { useEffect, useRef, useState } from 'react';
import * as S from './DropdownLabel.styles';
import type { LabelProps, PositionType } from '../Label.types';
import { ReactComponent as DropdownIcon } from '../../../assets/icon/drop_small.svg';
import DropdownLabelMenu from './DropdownLabelMenu';

function DropdownLabel({ position }: LabelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] =
    useState<PositionType>(position);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (newPosition: PositionType) => {
    setSelectedPosition(newPosition);
    setIsOpen(false); // 선택 후 드롭다운 닫기
  };

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX,
      });
    }
  }, [isOpen]);
  return (
    <S.DropdownLabelWrapper>
      <S.DropdownLabelContainer
        position={selectedPosition}
        onClick={toggleDropdown}
        ref={buttonRef}
      >
        <S.DropdownLabelPosition>{selectedPosition}</S.DropdownLabelPosition>
        <DropdownIcon />
      </S.DropdownLabelContainer>
      {isOpen && menuPosition.top !== 0 && menuPosition.left !== 0 && (
        <DropdownLabelMenu
          onSelect={handleSelect}
          top={menuPosition.top}
          left={menuPosition.left}
        />
      )}
    </S.DropdownLabelWrapper>
  );
}

export default DropdownLabel;
