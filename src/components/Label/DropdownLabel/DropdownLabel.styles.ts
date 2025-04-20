import styled from '@emotion/styled';
import { LabelLayout } from '../Label.styles';
import type { PositionType } from '../Label.types';
import { Positions } from '../Label.types';

const DropdownLabelWrapper = styled.div`
  position: relative;
  display: flex;
`;

const DropdownLabelContainer = styled.button<{ position: PositionType }>`
  ${LabelLayout};

  background: ${({ theme, position }) => Positions[position].background(theme)};
  outline: 1px solid
    ${({ theme, position }) => Positions[position].outline(theme)};
  color: ${({ theme, position }) => Positions[position].color(theme)};
  
  gap:2px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg{
  width: 18px;
  height: 18px;
  fill: ${({ theme, position }) => Positions[position].color(theme)};
`;

const DropdownLabelPosition = styled.div`
  height: 17px;
  ${({ theme }) => theme.text.bodyS_bold};
`;

export { DropdownLabelWrapper, DropdownLabelContainer, DropdownLabelPosition };
