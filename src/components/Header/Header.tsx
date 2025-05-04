import React from 'react';
import * as S from './Header.styles';
import rowLogo from '../../assets/logo_black.svg';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/intro');
  };
  return (
    <S.HeaderContainer>
      <S.HeaderLogo src={rowLogo} alt="Row Logo" onClick={handleLogoClick} />
    </S.HeaderContainer>
  );
}
