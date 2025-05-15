import styled from '@emotion/styled';

const PortfolioModifyContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100%;
`;

const PortfolioModifyCreateWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  height: 100%;

  padding: 0 48px;
`;

const PortfolioModifyPreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;

  padding: 30px;
`;

const PortfolioModifyCreateHeader = styled.div`
  display: flex;
  flex-direction: column;

  padding: 60px 0px 36px 0px;
  flex-shrink: 0;

  gap: 14px;
`;

const PortfolioModifyHeaderBack = styled.div`
  display: flex;
  flex-direction: row;

  gap: 4px;
  margin-bottom: 14px;
  align-items: center;

  color: ${(props) => props.theme.colors.gray[70]};
  font-size: 18px;
  font-weight: 700;

  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
    aspect-ratio: 1/1;
  }
`;

const PortfolioModifyHeaderText = styled.div`
  font-size: 32px;
  font-weight: 800;
`;

const PortfolioModifyHeaderLength = styled.div`
  font-size: 32px;
  font-weight: 600;
`;

const PortfolioModifyCreateSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PortfolioModifyIssueListWrapper = styled.div`
  width: 100%;
  padding: 12px 0px;

  display: flex;
  flex-direction: row;

  gap: 8px;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
`;

const PortfolioModifyCreateInput = styled.input`
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme.colors.gray[70]};

  border: none;
  padding: 12px 0px;
`;

const PortfolioModifyMarkdownLength = styled.div`
  color: ${(props) => props.theme.colors.primary[30]};

  font-size: 18px;
  font-weight: 700;

  padding: 12px 0;
`;

const PortfolioModifyPreview = styled.div`
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #aeb6bd;
`;

const PortfolioModifyButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px 0;

  justify-content: flex-end;
  align-items: center;
  gap: 12px;
`;

export {
  PortfolioModifyContainer,
  PortfolioModifyCreateHeader,
  PortfolioModifyCreateWrapper,
  PortfolioModifyHeaderBack,
  PortfolioModifyHeaderText,
  PortfolioModifyPreviewWrapper,
  PortfolioModifyCreateInput,
  PortfolioModifyCreateSection,
  PortfolioModifyHeaderLength,
  PortfolioModifyMarkdownLength,
  PortfolioModifyPreview,
  PortfolioModifyButtonWrapper,
  PortfolioModifyIssueListWrapper,
};

export {};
