import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './IntroPage.styles';
import Header from '../../components/Header/Header';

import leftTexture1 from '../../assets/noiseTexture/left/Texture1.svg';
import leftTexture2 from '../../assets/noiseTexture/left/Texture2.svg';
import leftTexture3 from '../../assets/noiseTexture/left/Texture3.svg';

import rightTexture1 from '../../assets/noiseTexture/right/Texture1.svg';
import rightTexture2 from '../../assets/noiseTexture/right/Texture2.svg';
import rightTexture3 from '../../assets/noiseTexture/right/Texture3.svg';

import centerLogo from '../../assets/logo_black_column.svg';

const IntroPage = () => {
  const navaigate = useNavigate();
  const handleButtonClick = () => {
    navaigate('/login');
  };
  return (
    <S.IntroPageContainer>
      <Header />
      <S.IntroTextureNoise src={leftTexture1} alt="Texture 1" left="0px" />
      <S.IntroTextureNoise src={leftTexture2} alt="Texture 2" left="104px" />
      <S.IntroTextureNoise src={leftTexture3} alt="Texture 3" left="310px" />

      <S.IntroTextureNoise src={rightTexture1} alt="Texture 1" right="0px" />
      <S.IntroTextureNoise src={rightTexture2} alt="Texture 2" right="104px" />
      <S.IntroTextureNoise src={rightTexture3} alt="Texture 3" right="310px" />

      <S.IntroCenterLogo src={centerLogo} alt="Logo" />
      <S.IntroButton onClick={handleButtonClick}>시작하기</S.IntroButton>
      <S.IntroSublineText>
        시작하기 버튼을 눌러 로그인해보세요!
      </S.IntroSublineText>
    </S.IntroPageContainer>
  );
};

export default IntroPage;
