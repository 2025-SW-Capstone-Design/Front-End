import React from 'react';
import * as S from './DropdownLabelMenu.styles';
import type { DropdownLabelMenuProps } from '../Label.types';
import { Positions } from '../Label.types';
import type { PositionType } from '../Label.types';
import Label from '../Label';
import ModalPortal from '../../Modal/ModalPortal';

function DropdownLabelMenu({ onSelect, top, left }: DropdownLabelMenuProps) {
  return (
    <ModalPortal>
      <S.DropdownLabelMenu style={{ top: `${top}px`, left: `${left}px` }}>
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
    </ModalPortal>
  );
}

export default DropdownLabelMenu;
