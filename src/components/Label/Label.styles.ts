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
`;

const LabelContainer = styled.div<{ position: PositionType }>`
  ${LabelLayout};

  ${({ theme }) => theme.text.bodyS_bold};
  background: ${({ theme, position }) => Positions[position].background(theme)};
  outline: 1px solid
    ${({ theme, position }) => Positions[position].outline(theme)};
  color: ${({ theme, position }) => Positions[position].color(theme)};
`;

export { LabelLayout, LabelContainer };
