import styled from '@emotion/styled';
import { css } from '@emotion/react';

const TaskButtonLayout = css`
  width: fit-content;
  height: 32px;
  flex-shrink: 0;
  padding: 8px 12px;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  border: none;
`;

const TaskButtonWrapper = styled.button<{ isSelected: boolean }>`
  ${TaskButtonLayout};

  ${({ theme }) => theme.text.labelL_bold};
  background: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.primary[40] : theme.colors.gray[20]};
  color: ${({ isSelected, theme }) =>
    isSelected ? 'white' : theme.colors.gray[70]};
  display: flex;
  display: flex;
  outline: 2px solid
    ${({ isSelected, theme }) =>
      isSelected ? theme.colors.primary[40] : theme.colors.gray[20]};
  outline-offset: -2px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export { TaskButtonWrapper };
