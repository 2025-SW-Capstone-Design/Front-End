import React from 'react';
import * as S from './LoginPage.styles';
import logo from '../../assets/logo_white.svg';
import keyboard_arrow_down from '../../assets/keyboard_arrow_down.svg';
import github from '../../assets/github.svg';

// NOTE 슬로건, url은 추후에 변경될 예정
function LoginPage() {
  return (
    <S.Container>
      <S.IntroContainer>
        <S.IntroInfo>
          <img src={logo} alt="" />
          <S.IntroText>
            <S.Slogan>간단한 설명이나 슬로건</S.Slogan>
            <S.Link>site.com</S.Link>
          </S.IntroText>
        </S.IntroInfo>
      </S.IntroContainer>
      <S.LoginContainer>
        <S.BackButton>
          <img src={keyboard_arrow_down} alt="" />
          돌아가기
        </S.BackButton>
        <S.LoginSectionWrapper>
          <S.LoginSection>
            <S.LoginHeader>
              <div>Log In</div>
              <p>Plan Hub는 깃허브 소셜 로그인을 사용합니다.</p>
            </S.LoginHeader>
            <S.LoginContent>
              <S.IconWrapper>
                <img src={github} alt="" />
              </S.IconWrapper>
              github
            </S.LoginContent>
            <S.LoginFooter>
              <S.LoginButton>로그인</S.LoginButton>
              <S.LoginFooterText>
                <p>깃허브 계정이 없으신가요? </p>
                <button>깃허브 바로가기</button>
              </S.LoginFooterText>
            </S.LoginFooter>
          </S.LoginSection>
        </S.LoginSectionWrapper>
        <S.Footer>
          <button>서비스 소개</button>
          <button>기능안내</button>
          <button>HOME</button>
        </S.Footer>
      </S.LoginContainer>
    </S.Container>
  );
}

export default LoginPage;
