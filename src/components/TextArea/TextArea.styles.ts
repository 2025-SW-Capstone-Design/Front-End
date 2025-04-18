import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { TextAreaStylesProps } from './TextArea.types';

const TextAreaLayout = css`
  padding: 16px;
  border-radius: 8px;
  resize: none;
  font-size: 16px;
`;

const TextAreaWrapper = styled.textarea<TextAreaStylesProps>`
  ${TextAreaLayout};
  width: ${({ width }) => width || '342px'};
  height: ${({ height }) => height || '44px'};
  outline: 1px solid ${({ theme }) => theme.colors.gray[60]};
  color: #0e0e0e;
  outline-offset: -1px;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[60]};
  }

  &:focus {
    caret-color: ${({ theme }) => theme.colors.primary[40]};
    outline: 1px solid ${({ theme }) => theme.colors.primary[30]};
    outline-offset: -1px;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[20]};
    color: ${({ theme }) => theme.colors.gray[50]};
    cursor: not-allowed;
  }
`;

export { TextAreaWrapper };
