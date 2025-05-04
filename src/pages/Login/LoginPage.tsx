import React from 'react';
import * as S from './LoginPage.styles';
import Header from '../../components/Header/Header';

import leftTexture1 from '../../assets/noiseTexture/left/Texture1.svg';
import leftTexture2 from '../../assets/noiseTexture/left/Texture2.svg';
import leftTexture3 from '../../assets/noiseTexture/left/Texture3.svg';

import rightTexture1 from '../../assets/noiseTexture/right/Texture1.svg';
import rightTexture2 from '../../assets/noiseTexture/right/Texture2.svg';
import rightTexture3 from '../../assets/noiseTexture/right/Texture3.svg';

import githubLogo from '../../assets/github.svg';

const LoginPage = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:8080';
  const GITHUB_URL = 'https://github.com';

  const navigateTo = () => {
    window.location.href = BASE_URL + '/oauth2/authorization/github';
  };

  return (
    <S.LoginPageContainer>
      <Header />
      <S.LoginTextureNoise src={leftTexture1} alt="Texture 1" left="0px" />
      <S.LoginTextureNoise src={leftTexture2} alt="Texture 2" left="104px" />
      <S.LoginTextureNoise src={leftTexture3} alt="Texture 3" left="310px" />

      <S.LoginTextureNoise src={rightTexture1} alt="Texture 1" right="0px" />
      <S.LoginTextureNoise src={rightTexture2} alt="Texture 2" right="104px" />
      <S.LoginTextureNoise src={rightTexture3} alt="Texture 3" right="310px" />

      <S.LoginLargeText>Log in</S.LoginLargeText>
      <S.LoginSmallText>
        Plan Hub는 깃허브 소셜 로그인을 사용합니다.
      </S.LoginSmallText>
      <S.LoginGithubLogo src={githubLogo} alt="Github Logo" />
      <S.LoginGithubText>GitHub</S.LoginGithubText>

      <S.LoginButton onClick={navigateTo}>로그인</S.LoginButton>
      <S.LoginSublineText>
        깃허브 계정이 없으신가요?
        <a href={GITHUB_URL} target="blank">
          깃허브 바로가기
        </a>
        `
      </S.LoginSublineText>
    </S.LoginPageContainer>
  );
};

export default LoginPage;
