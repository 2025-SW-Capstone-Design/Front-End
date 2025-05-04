import styled from '@emotion/styled';
import type { PositionedImageProps } from './LoginPage.types';

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
`;

const LoginTextureNoise = styled.img<PositionedImageProps>`
  position: absolute;
  height: calc(100vh - 61px);
  top: 61px;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
`;

const LoginLargeText = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 273px;

  font-size: 48px;
  font-weight: 800;
`;

const LoginSmallText = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 12px;

  font-size: 22px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.gray[60]};
`;

const LoginGithubLogo = styled.img`
  display: flex;
  width: 136px;

  margin: 0 auto;
  margin-top: 20px;
`;

const LoginGithubText = styled.div`
  display: flex;

  margin: 0 auto;
  margin-top: 4px;

  font-size: 22px;
  font-weight: 700;
`;

const LoginButton = styled.button`
  display: flex;

  margin: 0 auto;
  margin-top: 80px;

  width: 280px;
  height: 44px;
  padding: 12px 24px;
  justify-content: center;

  border-radius: 8px;
  background: var(--Black, #0b0b0b);

  color: var(--text-invert, #fff);
  font-size: 16px;
  font-weight: 600;
`;

const LoginSublineText = styled.div`
  display: flex;
  flex-direction: row;

  margin: 0 auto;
  margin-top: 8px;

  gap: 8px;

  font-size: 14px;
  color: ${(props) => props.theme.colors.gray[80]};

  a {
    color: ${(props) => props.theme.colors.primary[40]};
  }
`;

export {
  LoginPageContainer,
  LoginTextureNoise,
  LoginLargeText,
  LoginSmallText,
  LoginGithubLogo,
  LoginGithubText,
  LoginButton,
  LoginSublineText,
};
