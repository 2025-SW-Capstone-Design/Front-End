import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { IconButtonStylesProps } from './IconButton.types';

const ButtonLayout = css`
  height: 44px;
  flex-shrink: 0;
  padding: 10px 24px;
  border-radius: 8px;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
`;

const iconPrimaryButton = styled.button<IconButtonStylesProps>`
  ${ButtonLayout};

  width: ${({ width }) => width || '228px'};
  background: black;
  color: white;

  &:hover,
  &:active {
    background: ${({ theme }) => theme.colors.gray[90]};
  }
`;

const iconSecondaryButton = styled.button<IconButtonStylesProps>`
  ${ButtonLayout};

  width: ${({ width }) => width || '228px'};
  background: ${({ theme }) => theme.colors.gray[10]};
  color: ${({ theme }) => theme.colors.gray[90]};

  &:hover,
  &:active {
    background: ${({ theme }) => theme.colors.gray[30]};
  }
`;

const iconTertiaryButton = styled.button<IconButtonStylesProps>`
  ${ButtonLayout};

  width: ${({ width }) => width || '228px'};
  background: ${({ theme }) => theme.colors.primary[40]};
  color: white;

  &:hover,
  &:active {
    background: ${({ theme }) => theme.colors.primary[30]};
  }
`;

const iconButtonContent = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  gap: 8px;
  vertical-align: middle;
  img {
    width: 24px;
    height: 24px;
  }
`;

export {
  iconPrimaryButton,
  iconSecondaryButton,
  iconTertiaryButton,
  iconButtonContent,
};
