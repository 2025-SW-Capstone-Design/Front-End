import styled from '@emotion/styled';

const AvatarGroupContainer = styled.div`
  width: auto;
  display: flex;
  position: relative;
  height: 32px;
`;

const AvatarWrapper = styled.div<{ index: number }>`
  position: absolute;
  right: ${({ index }) => index * 20}px;
  z-index: ${({ index }) => 100 + index};
`;

const AvatarImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

const MoreAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #111;
  color: white;
  padding-top: 2px;
  padding-left: 4px;
  ${({ theme }) => theme.text.labelL_medium};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Tooltip = styled.div`
  position: absolute;
  top: 35px;
  right: -50px;
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export {
  AvatarGroupContainer,
  AvatarWrapper,
  AvatarImage,
  MoreAvatar,
  Tooltip,
};
