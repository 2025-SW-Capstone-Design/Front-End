import styled from '@emotion/styled';
import noise_texture from '../../assets/NoiseTexture.svg';

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 67px;
  align-items: center;
  padding: 18px 24px;
  background: var(--Background, #f9f9f9);
  border-bottom: 1px var(--Grays-Gray-3, #c7c7cc) solid;

  img {
    width: 146px;
    height: 24px;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 67px);
  background: var(--Background, #f9f9f9);
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const NoiseOverlay = styled.div`
  position: absolute;
  width: 600px;
  height: 100vw;
  background-image: url(${noise_texture});
  background-size: cover;
  background-position: center;
  opacity: 0.3;
  pointer-events: none;
  transform-origin: top left;
  mix-blend-mode: soft-light;
`;

export const LeftCircle = styled.div`
  width: 484px;
  height: 484px;
  border-radius: 50%;
  background: linear-gradient(318deg, #606065 0%, black 100%);
  position: absolute;
  left: -242px;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
`;

export const RightCircle = styled.div`
  width: 484px;
  height: 484px;
  border-radius: 50%;
  background: linear-gradient(318deg, #606065 0%, black 100%);
  position: absolute;
  right: -242px;
  filter: blur(80px);
  overflow: hidden;
  pointer-events: none;
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 797px;
  height: 400px;
  align-items: center;
  justify-content: flex-start;
`;

export const LoginTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 48px;
  font-weight: 800;
  word-wrap: break-word;
`;

export const LoginTitleText = styled.p`
  ${({ theme }) => theme.text.bodyXL_medium};
  color: ${({ theme }) => theme.colors.gray[60]};
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 32px;
  margin-bottom: 80px;
  ${({ theme }) => theme.text.bodyXL_bold};

  img {
    width: 93px;
    height: 92px;
  }
`;

export const LoginFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const LoginButton = styled.button`
  width: 280px;
  height: 44px;
  padding: 12px 24px;
  background: var(--Black, #0b0b0b);
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
`;

export const LoginFooterText = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 8px;
  p {
    color: ${({ theme }) => theme.colors.gray[60]};
    ${({ theme }) => theme.text.bodyS_medium};
  }
  button {
    ${({ theme }) => theme.text.bodyS_bold};
    color: ${({ theme }) => theme.colors.primary[40]};
  }
`;
