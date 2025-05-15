import styled from '@emotion/styled';

const ReadmeContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
`;

const ReadmeHeader = styled.div`
  display: flex;
  flex-direction: column;

  padding: 72px 48px 36px 48px;
  flex-shrink: 0;
`;

const ReadmeHeaderText = styled.div`
  font-size: 48px;
  font-weight: 800;
`;

const ReadmeHeaderBottomWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  align-items: center;

  margin-top: 7px;

  span {
    color: ${(props) => props.theme.colors.gray[80]};
    font-size: 24px;
    font-weight: 500;
  }
`;

const ReadmeHeaderButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;

  gap: 12px;
  margin-left: auto;
`;

const ReadmeContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 77vh;

  padding: 48px;
  margin-top: 50px;

  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.colors.gray[50]};

  gap: 12px;
  background-color: ${(props) => props.theme.colors.gray[20]};

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export {
  ReadmeContainer,
  ReadmeHeader,
  ReadmeHeaderText,
  ReadmeHeaderBottomWrapper,
  ReadmeHeaderButtonWrapper,
  ReadmeContentWrapper,
};
