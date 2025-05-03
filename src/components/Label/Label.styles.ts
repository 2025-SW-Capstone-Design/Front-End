import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { PositionType } from './Label.types';
import { Positions } from './Label.types';

const LabelLayout = css`
  width: fit-content;
  height: 25px;
  flex-shrink: 0;
  padding: 4px 12px;
  border-radius: 24px;
  text-align: center;
  border: none;
  cursor: pointer;
`;

const LabelContainer = styled.div<{
  position: PositionType;
  isSelected?: boolean;
  isClickable?: boolean;
}>`
  ${LabelLayout};

  ${({ theme }) => theme.text.bodyS_bold};
  background: ${({ theme, position }) => Positions[position].background(theme)};
  outline: 1px solid
    ${({ theme, position }) => Positions[position].outline(theme)};
  color: ${({ theme, position }) => Positions[position].color(theme)};

  opacity: ${({ isClickable, isSelected }) =>
    isClickable ? (isSelected ? 1 : 0.5) : 1};

  pointer-events: ${({ isClickable }) => (isClickable ? 'auto' : 'none')};
`;

export { LabelLayout, LabelContainer };
