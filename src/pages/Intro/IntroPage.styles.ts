import styled from '@emotion/styled';
import type { PositionedImageProps } from './IntroPage.types';

const IntroPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
`;

const IntroTextureNoise = styled.img<PositionedImageProps>`
  position: absolute;
  height: calc(100vh - 61px);
  top: 61px;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
`;

const IntroCenterLogo = styled.img`
  display: flex;

  width: 145px;
  height: 125px;

  margin: 0 auto;
  margin-top: 394px;
`;

const IntroButton = styled.button`
  display: flex;
  width: 280px;
  height: 44px;
  padding: 12px 24px;

  margin: 0 auto;
  margin-top: 80px;
  justify-content: center;

  border-radius: 8px;
  background: var(--g, linear-gradient(272deg, #606065 -6.58%, #000 99.84%));

  color: var(--text-invert, #fff);
  font-size: 16px;
`;

const IntroSublineText = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 12px;

  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  color: ${(props) => props.theme.colors.gray[80]};
`;

export {
  IntroPageContainer,
  IntroTextureNoise,
  IntroCenterLogo,
  IntroButton,
  IntroSublineText,
};
