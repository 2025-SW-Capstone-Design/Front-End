import React from 'react';
import * as S from './CustomToolbar.styles';
import type { ToolbarProps } from 'react-big-calendar';

const CustomToolbar: React.FC<ToolbarProps> = (toolbar) => {
  const goToBack = () => {
    toolbar.onNavigate('PREV');
  };

  const goToNext = () => {
    toolbar.onNavigate('NEXT');
  };

  const label = toolbar.label;

  return (
    <>
      <S.ToolbarWrapper>
        <S.ToolbarDateWrapper>
          <S.ToolbarElement onClick={goToBack}>{'<'}</S.ToolbarElement>
          <S.ToolbarDate>{label}</S.ToolbarDate>
          <S.ToolbarElement onClick={goToNext}>{'>'}</S.ToolbarElement>
        </S.ToolbarDateWrapper>
      </S.ToolbarWrapper>
    </>
  );
};

export default CustomToolbar;
