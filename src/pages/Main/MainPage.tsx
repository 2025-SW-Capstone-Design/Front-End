import React from 'react';
import * as S from './MainPage.styles';
import logo from '../../assets/logo_black.svg';
import logo_column from '../../assets/logo_black_column.svg';

const MainPage = () => {
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
        <S.MainContent>
          <S.Logo src={logo_column} alt="로고" />
          <S.Footer>
            <S.StartButton>시작하기</S.StartButton>
            <S.FooterText>시작하기 버튼을 눌러 로그인해보세요!</S.FooterText>
          </S.Footer>
        </S.MainContent>
      </S.Container>
    </>
  );
};

export default MainPage;
