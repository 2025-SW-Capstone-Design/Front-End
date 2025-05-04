import styled from '@emotion/styled';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  padding: 18px 24px;

  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray[30]};
`;

const HeaderLogo = styled.img`
  width: fit-content;
  height: fit-content;
  object-fit: contain;
  cursor: pointer;
`;

export { HeaderContainer, HeaderLogo };
