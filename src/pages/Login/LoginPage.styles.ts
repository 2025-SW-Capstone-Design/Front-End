import styled from '@emotion/styled';
import backgroundImage from '../../assets/background.png';

// 왼쪽 부분
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const IntroContainer = styled.div`
  display: flex;
  width: 58%;
  height: auto;
  border-bottom-right-radius: 180px;

  background:
    linear-gradient(
      0deg,
      rgba(105, 122, 252, 0.9) 0%,
      rgba(105, 122, 252, 0.9) 100%
    ),
    url(${backgroundImage}), #d2d7fe;
  background-blend-mode: color-burn, luminosity, normal;
  background-size: cover; /* 또는 contain */
  background-position: center;

  align-items: center;
  justify-content: center;

  img {
    width: 472px;
  }
`;

export const IntroInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const IntroText = styled.div`
  display: flex;
  height: 81px;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  border-radius: 12px;
  outline: 2px white solid;
  outline-offset: -2px;
  color: white;
`;

export const Slogan = styled.p`
  ${({ theme }) => theme.text.titleS_bold};
`;

export const Link = styled.p`
  ${({ theme }) => theme.text.bodyL_medium};
`;

// 오른쪽 부분
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  width: 42%;
  height: 100vh;
  justify-content: space-between;
  padding: 112px 238px 112px 260px;
`;

export const BackButton = styled.div`
  display: flex;
  position: absolute;
  left: 17%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.primary[30]};
  ${({ theme }) => theme.text.labelL_bold};

  width: 79px;
  height: 24px;
`;

export const LoginSectionWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 308px;
  height: 380px;
`;

export const LoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #2c2e2f;
  font-size: 32px;
  font-weight: 800;
  gap: 12px;

  p {
    color: #a0aec0;
    font-size: 16px;
    font-weight: 700;
    word-wrap: break-word;
  }
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 136px;
  height: 120px;
  gap: 12px;
  align-items: center;
  margin-auto;

  color: #2c2e2f;
  font-size: 18px;
  font-family: Helvetica;
  font-weight: 700;
  line-height: 25.2px;
`;
export const IconWrapper = styled.div`
  display: flex;
  padding: 18px;
  width: 84px;
  height: 84px;
  border-radius: 8px;
  outline: 2px #eef0ff solid;
  outline-offset: -2px;

  word-wrap: break-word img {
    width: 48px;
    height: 48px;
  }
`;

export const LoginFooter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 41px;
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.primary[40]};
  ${({ theme }) => theme.text.labelL_bold}
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  color: white;

  &:hover {
    background: ${({ theme }) => theme.colors.primary[30]};
  }
`;

export const LoginFooterText = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  gap: 4px;
  p {
    color: #a0aec0;
    ${({ theme }) => theme.text.labelM_medium};
  }
  button {
    ${({ theme }) => theme.text.labelM_bold};
    color: ${({ theme }) => theme.colors.primary[40]};
  }
`;

export const Footer = styled.div`
  display: flex;
  width: 260px;
  height: 17px;
  gap: 51px;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.text.bodyS_medium};

  button {
    height: 17px;
    color: #a0aec0;
  }
`;
