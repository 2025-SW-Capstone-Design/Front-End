import styled from '@emotion/styled';
import type { DropdownStylesProps } from './Dropdown.types';

export const Container = styled.div<DropdownStylesProps>`
  position: relative;
  width: ${({ width }) => width || '168px'};
  height: 44px;
`;

export const SelectBox = styled.div<{
  isOpen: boolean;
  dropdownType: 'default' | 'primary';
}>`
  padding: 10px 24px;
  color: ${({ theme, dropdownType }) =>
    dropdownType === 'primary'
      ? theme.colors.primary[40]
      : theme.colors.gray[80]};
  outline: 2px solid
    ${({ theme, dropdownType }) =>
      dropdownType === 'primary'
        ? theme.colors.primary[30]
        : theme.colors.gray[60]};
  outline-offset: -2px;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 10px;

  ${({ theme }) => theme.text.bodyM_medium};
  ${({ isOpen, theme, dropdownType }) =>
    isOpen &&
    `outline: 2px solid ${
      dropdownType === 'primary'
        ? theme.colors.primary[40]
        : theme.colors.gray[80]
    };
  `}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme, dropdownType }) =>
      dropdownType === 'primary'
        ? theme.colors.primary[40]
        : theme.colors.gray[80]};
  }
`;

export const OptionList = styled.ul<{ dropdownType: 'default' | 'primary' }>`
  position: absolute;
  top: calc(100% - 1px);
  left: 0;
  width: 100%;
  outline: 2px solid
    ${({ theme, dropdownType }) =>
      dropdownType === 'primary'
        ? theme.colors.primary[30]
        : theme.colors.gray[60]};
  outline-offset: -2px;
  border-radius: 8px;
  background-color: white;
  z-index: 10;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const OptionItem = styled.li<{ isSelected: boolean }>`
  padding: 10px 24px;
  height: 40px;
  color: ${({ theme }) => theme.colors.gray[90]};
  ${({ theme }) => theme.text.bodyM_medium};
  border-radius: 8px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[20]};
  cursor: pointer;

  background-color: white;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[30]};
  }
`;
