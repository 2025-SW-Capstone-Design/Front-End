import styled from '@emotion/styled';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  font-size: 30px;
  font-weight: 700;

  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.colors.gray[70]};
`;
export { MainContainer };
