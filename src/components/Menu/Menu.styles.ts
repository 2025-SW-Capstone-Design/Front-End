import styled from '@emotion/styled';

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
  height: 191px;
  padding: 24px;

  border-radius: 12px;
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.gray[20]};
`;

const MenuTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;

  gap: 8px;

  font-size: 18px;
  font-weight: 700;

  align-items: center;

  img {
    width: 24px;
    height: 24px;
  }
`;

const MenuSubTitle = styled.div`
  color: ${(props) => props.theme.colors.gray[80]};
  font-size: 15px;
  font-weight: 500;

  margin-bottom: 48px;
`;

const MenuButton = styled.button`
  display: flex;
  height: 44px;
  padding: 12px 24px;

  margin-left: auto;

  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.gray[10]};

  color: ${(props) => props.theme.colors.gray[90]};
  font-size: 16px;
  font-weight: 600;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray[40]};
  }
`;

export { MenuContainer, MenuTitle, MenuSubTitle, MenuButton };
