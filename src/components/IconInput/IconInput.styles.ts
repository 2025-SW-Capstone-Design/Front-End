import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { IconInputStylesProps } from './IconInput.types';

const IconInputLayout = css`
  flex-shrink: 0;
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
`;
const IconInputWrapper = styled.div<IconInputStylesProps>`
  ${IconInputLayout};
  width: ${({ width }) => width || '200px'};
  height: ${({ height }) => height || '40px'};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  outline: 1.5px solid ${({ theme }) => theme.colors.gray[90]};
  outline-offset: -1.5px;
  background-color: #fff;

  &:focus-within {
    outline: 1.5px solid ${({ theme }) => theme.colors.primary[30]};
  }
`;

const StyledInput = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  color: #0e0e0e;
  background: transparent;

  ${({ theme }) => theme.text.labelL_medium};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[80]};
  }

  &:focus {
    caret-color: ${({ theme }) => theme.colors.primary[40]};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.colors.gray[80]};
  }
`;
export { IconInputWrapper, StyledInput, IconWrapper };
