import styled from '@emotion/styled';

const ToolbarWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  padding: 36px 0px;
  align-items: center;
  justify-content: center;

  height: 72px;
  background-color: #ffffff;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[20]};
`;

const ToolbarDateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 40px;
`;

const ToolbarElement = styled.div`
  font-size: 50px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.primary[40]};
  cursor: pointer;
`;

const ToolbarDate = styled.div`
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme.colors.gray[90]};
`;

export { ToolbarWrapper, ToolbarElement, ToolbarDateWrapper, ToolbarDate };
