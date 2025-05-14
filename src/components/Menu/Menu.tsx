import React from 'react';
import * as S from './Menu.styles';
import type { MenuProps } from './Menu.types';
import { useNavigate } from 'react-router-dom';

const Menu = ({ icon, title, subTitle, route, buttonText }: MenuProps) => {
  const navigate = useNavigate();

  return (
    <S.MenuContainer>
      <S.MenuTitle>
        <img src={icon} alt="icon" />
        {title}
      </S.MenuTitle>
      <S.MenuSubTitle>{subTitle}</S.MenuSubTitle>
      <S.MenuButton onClick={() => navigate(route)}>{buttonText}</S.MenuButton>
    </S.MenuContainer>
  );
};

export default Menu;
