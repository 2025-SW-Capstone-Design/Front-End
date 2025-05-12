import React, { useEffect, useRef, useState } from 'react';
import * as S from './Dropdown.styles';
import type { DropdownProps } from './Dropdown.types';
import { ReactComponent as Drop } from '../../assets/icon/drop.svg';
import type { projectInfo } from '../../apis/project/project.types';
import type { MilestoneResponse } from '../../apis/milestone/milestone.types';

function isProjectInfo(option: any): option is projectInfo {
  return 'projectId' in option;
}

function Dropdown({
  options,
  placeholder = '전체보기',
  onSelect,
  width,
  dropdownType = 'default',
  value,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value) {
      const selectedOption = options.find((option) => {
        if (isProjectInfo(option)) {
          return option.projectId === value;
        } else {
          return option.milestoneId === value;
        }
      });

      if (selectedOption) {
        setSelectedTitle(selectedOption.title);
      }
    }
  }, [value, options]);

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

  const handleSelect = (option: projectInfo | MilestoneResponse) => {
    if (isProjectInfo(option)) {
      setSelectedTitle(option.title);
      onSelect(option.projectId, option.title);
    } else {
      setSelectedTitle(option.title);
      onSelect(option.milestoneId, option.title);
    }
    setIsOpen(false);
  };

  return (
    <S.Container ref={dropdownRef} width={width}>
      <S.SelectBox
        onClick={() => setIsOpen((prev) => !prev)}
        isOpen={isOpen}
        dropdownType={dropdownType}
      >
        {selectedTitle ?? placeholder}
        <Drop />
      </S.SelectBox>
      {isOpen && (
        <S.OptionList dropdownType={dropdownType}>
          {options.map((option) => (
            <S.OptionItem
              key={
                isProjectInfo(option) ? option.projectId : option.milestoneId
              }
              onClick={() => handleSelect(option)}
              isSelected={option.title === selectedTitle}
            >
              {option.title}
            </S.OptionItem>
          ))}
        </S.OptionList>
      )}
    </S.Container>
  );
}

export default Dropdown;
