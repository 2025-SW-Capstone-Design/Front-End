import React from 'react';
import * as S from './LoginPage.styles';
import logo from '../../assets/logo_black.svg';
import github from '../../assets/github.svg';

// NOTE 슬로건, url은 추후에 변경될 예정
// NOTE 서비스 소개, 기능안내, HOME 버튼은 페이지 추가 후 연결 예정
function LoginPage() {
  const BASE_URL = process.env.REACT_APP_BASE_URL ?? 'http://localhost:8080';
  const handleLoginClick = () => {
    window.location.href = BASE_URL + '/oauth2/authorization/github';
  };

  const handleGithubButtonClick = () => {
    window.location.href = 'https://github.com/';
  };

  return (
    <>
      <S.Header>
        <img src={logo} alt="로고" />
      </S.Header>
      <S.Container>
        <S.LeftCircle />
        <S.NoiseOverlay style={{ left: -242 }} />
        <S.RightCircle />
        <S.NoiseOverlay style={{ right: -242 }} />
        <S.LoginContent>
          <S.LoginTitle>
            Log in
            <S.LoginTitleText>
              Plan Hub는 깃허브 소셜 로그인을 사용합니다.
            </S.LoginTitleText>
          </S.LoginTitle>
          <S.LogoContainer>
            <img src={github} alt="깃허브 로고" />
            GitHub
          </S.LogoContainer>
          <S.LoginFooter>
            <S.LoginButton onClick={handleLoginClick}>로그인</S.LoginButton>
            <S.LoginFooterText>
              <p>깃허브 계정이 없으신가요?</p>
              <button onClick={handleGithubButtonClick}>깃허브 바로가기</button>
            </S.LoginFooterText>
          </S.LoginFooter>
        </S.LoginContent>
      </S.Container>
    </>
  );
}

export default LoginPage;
