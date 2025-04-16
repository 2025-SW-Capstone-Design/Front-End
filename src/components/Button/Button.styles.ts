import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { ButtonStylesProps } from './Button.types';

const ButtonLayout = css`
  height: 44px;
  flex-shrink: 0;
  padding: 12px 24px;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
`;

const primaryButton = styled.button<ButtonStylesProps>`
  ${ButtonLayout};

  width: ${({ width }) => width || '228px'};
  background: black;
  color: white;
  ${({ theme }) => theme.text.bodyM_bold};

  &:hover,
  &:active {
    background: ${({ theme }) => theme.colors.gray[90]};
  }
`;

const softButton = styled.button<ButtonStylesProps>`
  ${ButtonLayout};

  width: ${({ width }) => width || '228px'};
  background: ${({ theme }) => theme.colors.gray[20]};
  color: ${({ theme }) => theme.colors.gray[90]};
  ${({ theme }) => theme.text.bodyM_bold};

  &:hover,
  &:active {
    background: ${({ theme }) => theme.colors.gray[40]};
  }
`;

const secondaryButton = styled.button<ButtonStylesProps>`
  ${ButtonLayout};

  width: ${({ width }) => width || '228px'};
  background: ${({ theme }) => theme.colors.gray[10]};
  color: ${({ theme }) => theme.colors.gray[90]};
  ${({ theme }) => theme.text.bodyM_bold};

  &:hover,
  &:active {
    background: ${({ theme }) => theme.colors.gray[30]};
  }
`;

const tertiaryButton = styled.button<ButtonStylesProps>`
  ${ButtonLayout};

  width: ${({ width }) => width || '228px'};
  background: ${({ theme }) => theme.colors.primary[40]};
  color: white;
  ${({ theme }) => theme.text.bodyM_bold};

  &:hover,
  &:active {
    background: ${({ theme }) => theme.colors.primary[30]};
  }
`;
export { softButton, primaryButton, secondaryButton, tertiaryButton };
