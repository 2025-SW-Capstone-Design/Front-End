import styled from '@emotion/styled';

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 26px;
  align-items: center;
`;

const MenuButton = styled.img`
  width: 24px;
  height: 24px;

  cursor: pointer;
  background: none;

  &:hover {
    opacity: 0.7;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 20px;
  background-color: #ccc;
`;

export { MenuContainer, MenuButton, Divider };
