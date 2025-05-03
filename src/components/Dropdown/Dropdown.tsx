import React, { useEffect, useRef, useState } from 'react';
import * as S from './Dropdown.styles';
import type { DropdownProps } from './Dropdown.types';
import { ReactComponent as Drop } from '../../assets/icon/drop.svg';

function Dropdown({
  options,
  placeholder = '선택하세요',
  onSelect,
  width,
  dropdownType = 'default',
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <S.Container ref={dropdownRef} width={width}>
      <S.SelectBox
        onClick={() => setIsOpen((prev) => !prev)}
        isOpen={isOpen}
        dropdownType={dropdownType}
      >
        {selected ?? placeholder}
        <Drop />
      </S.SelectBox>
      {isOpen && (
        <S.OptionList dropdownType={dropdownType}>
          {options.map((option) => (
            <S.OptionItem
              key={option}
              onClick={() => handleSelect(option)}
              isSelected={option === selected}
            >
              {option}
            </S.OptionItem>
          ))}
        </S.OptionList>
      )}
    </S.Container>
  );
}

export default Dropdown;
