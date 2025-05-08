import styled from '@emotion/styled';
import { css } from '@emotion/react';

const TaskLabelLayout = css`
  display: flex;
  flex-shrink: 0;
  align-items: center;

  width: fit-content;
  height: 25px;

  padding: 4px 12px;
  border-radius: 24px;
  cursor: pointer;
`;

const lightenColor = (color: string, amount: number) => {
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);

  const lightenComponent = (c: number) =>
    Math.min(255, Math.floor(c + (255 - c) * amount));

  const rHex = lightenComponent(r).toString(16).padStart(2, '0');
  const gHex = lightenComponent(g).toString(16).padStart(2, '0');
  const bHex = lightenComponent(b).toString(16).padStart(2, '0');

  return `${rHex}${gHex}${bHex}`;
};

const TaskLabelContainer = styled.div<{
  isSelected?: boolean;
  isClickable?: boolean;
  color: string;
}>`
  ${TaskLabelLayout};
  ${({ theme }) => theme.text.bodyS_bold};
  background-color: ${({ color, isSelected }) =>
    isSelected ? `#${lightenColor(color, 0.6)}` : `#${color}`};
  color: ${({ isSelected }) =>
    !isSelected ? `#${lightenColor('#000000', 0.9)}` : '#000000'};
  border: 1px solid #${({ color }) => color};
  opacity: ${({ isClickable, isSelected }) =>
    isClickable ? (isSelected ? 1 : 0.5) : 1};
  pointer-events: ${({ isClickable }) => (isClickable ? 'auto' : 'none')};
`;

export { TaskLabelLayout, TaskLabelContainer };
