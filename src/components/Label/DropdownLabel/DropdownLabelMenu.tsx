import React from 'react';
import * as S from './DropdownLabelMenu.styles';
import type { DropdownLabelMenuProps } from '../Label.types';
import { Positions } from '../Label.types';
import type { PositionType } from '../Label.types';
import Label from '../Label';

function DropdownLabelMenu({ onSelect }: DropdownLabelMenuProps) {
  return (
    <S.DropdownLabelMenu>
      {Object.keys(Positions).map((key) => {
        const position = key as PositionType;
        return (
          <S.DropdownLabelMenuItem
            key={position}
            onClick={() => onSelect(position)}
          >
            <Label position={position} />
          </S.DropdownLabelMenuItem>
        );
      })}
    </S.DropdownLabelMenu>
  );
}

export default DropdownLabelMenu;
