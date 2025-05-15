import styled from '@emotion/styled';

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
`;

const PortfolioHeader = styled.div`
  display: flex;
  flex-direction: column;

  padding: 72px 48px 36px 48px;
  flex-shrink: 0;
`;

const PortfolioHeaderText = styled.div`
  font-size: 48px;
  font-weight: 800;
`;

const PortfolioHeaderBottomWrapper = styled.div`
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

const PortfolioHeaderButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;

  gap: 12px;
  margin-left: auto;
`;

const PortfolioContentWrapper = styled.div`
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
  PortfolioContainer,
  PortfolioHeader,
  PortfolioHeaderText,
  PortfolioHeaderBottomWrapper,
  PortfolioHeaderButtonWrapper,
  PortfolioContentWrapper,
};
