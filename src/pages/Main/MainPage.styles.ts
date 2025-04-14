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
  background-image: url(${noise_texture}); // ✅ 실제 경로로!
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

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 797px;
  height: 278px;
  align-items: center;
  gap: 80px;
`;

export const Logo = styled.img`
  width: 145px;
  height: 125px;
`;
export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;

export const StartButton = styled.button`
  width: 280px;
  height: 44px;
  padding: 12px 24px;
  background: linear-gradient(318deg, #606065 0%, black 100%);
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  word-wrap: break-word;
`;

export const FooterText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray[80]};
  ${({ theme }) => theme.text.bodyS_medium};
  word-wrap: break-word;
`;
