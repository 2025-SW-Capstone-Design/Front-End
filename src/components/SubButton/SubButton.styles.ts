import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { SubButtonStylesProps } from './SubButton.types';

const ButtonLayout = css`
  flex-shrink: 0;
  height: fit-content;
  padding: 12px 20px;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
`;

const PrimarySubButton = styled.button<SubButtonStylesProps>`
  ${ButtonLayout};
  width: ${({ width }) => width || 'auto'};
  background: transparent;
  outline: 1.5px solid ${({ theme }) => theme.colors.primary[30]};
  outline-offset: -1.5px;
  color: ${({ theme }) => theme.colors.primary[40]};
  ${({ theme }) => theme.text.bodyS_bold};

  &:hover,
  &:active {
    background: ${({ theme }) => theme.colors.primary[20]};
    outline: 1.5px solid ${({ theme }) => theme.colors.primary[40]};
    outline-offset: -1.5px;
  }

  &:disabled {
    background: transparent;
    outline: 1.5px solid ${({ theme }) => theme.colors.gray[30]};
    outline-offset: -1.5px;
    color: ${({ theme }) => theme.colors.gray[40]};
    cursor: not-allowed;
  }
`;

const defaultSubButton = styled.button<SubButtonStylesProps>`
  ${ButtonLayout};
  width: ${({ width }) => width || 'auto'};
  background: black;
  outline: 2px solid black;
  outline-offset: -2px;
  color: white;
  ${({ theme }) => theme.text.bodyS_bold};

  &:hover,
  &:active {
    background: ${({ theme }) => theme.colors.gray[90]};
    outline: 2px solid ${({ theme }) => theme.colors.gray[90]};
    outline-offset: -2px;
    color: ${({ theme }) => theme.colors.primary[30]};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.gray[20]};
    color: ${({ theme }) => theme.colors.gray[60]};
    cursor: not-allowed;
    outline: none;
  }
`;

export { PrimarySubButton, defaultSubButton };
