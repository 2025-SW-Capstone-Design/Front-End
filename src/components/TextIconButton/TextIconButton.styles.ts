import styled from '@emotion/styled';
import { css } from '@emotion/react';
const TextIconButtonLayout = css`
  display: flex;
  align-items: center;
`;
const TextIconPrimaryButton = styled.button`
  ${TextIconButtonLayout};
  cursor: pointer;
  ${({ theme }) => theme.text.bodyM_bold};
  color: ${({ theme }) => theme.colors.primary[40]};
  line-height: 20px;
  width: auto;
  height: auto;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.primary[30]};
    svg{
      fill: ${({ theme }) => theme.colors.primary[30]};
        }   
  }

  svg{
    width: 18px;
    height: 18px;
    fill: ${({ theme }) => theme.colors.primary[40]};
`;

const TextIconSecondaryButton = styled.button`
  ${TextIconButtonLayout};
  cursor: pointer;
  ${({ theme }) => theme.text.bodyM_bold};
  color: ${({ theme }) => theme.colors.gray[70]};
  line-height: 20px;
  width: auto;
  height: auto;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.primary[80]};
    svg {
      fill: ${({ theme }) => theme.colors.primary[80]};
    }
  }

  svg{
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.colors.gray[70]};
`;

const TextIconButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export {
  TextIconButtonLayout,
  TextIconPrimaryButton,
  TextIconSecondaryButton,
  TextIconButtonContent,
};
