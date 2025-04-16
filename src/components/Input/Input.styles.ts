import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { InputStylesProps } from './Input.types';

const InputLayout = css`
  height: 44px;
  flex-shrink: 0;
  padding: 10px 24px;
  border-radius: 12px;
  cursor: pointer;
  border: none;
`;
const InputContainer = styled.div`
  max-width: 342px;
`;

const InputWrapper = styled.input<InputStylesProps & { status?: string }>`
  ${InputLayout};

  width: ${({ width }) => width || '342px'};
  outline: 1px solid
    ${({ theme, status }) =>
      status === 'error'
        ? '#FC4949'
        : status === 'success'
          ? '#5359FF'
          : theme.colors.gray[60]};

  ${({ theme }) => theme.text.bodyM_bold};

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

const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 24px;
  gap: 4px;
  margin-top: 4px;
  img {
    width: 14px;
    height: 14px;
  }
`;

const Message = styled.p<{ status?: string }>`
  ${({ theme }) => theme.text.detail_medium};
  color: ${({ theme, status }) =>
    status === 'error'
      ? '#FC4949'
      : status === 'success'
        ? '#5359FF'
        : theme.colors.gray[60]};
`;

export { InputContainer, InputWrapper, MessageWrapper, Message };
