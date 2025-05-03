import styled from '@emotion/styled';

const PortfolioCardWrapper = styled.div`
  width: 296px;
  min-height: 175px;
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.08);
  background-color: ${({ theme }) => theme.colors.gray[10]};
  outline: 1px solid ${({ theme }) => theme.colors.gray[40]};
  outline-offset: -1px;
`;

const PortfolioCardHeader = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const PortfolioCardStatusBar = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PortfolioCardStatus = styled.div`
  width: 43px;
  height: 20px;
  background: ${({ theme }) => theme.colors.gray[90]};
  color: white;
  ${({ theme }) => theme.text.labeS_bold};
  padding: 4px 8px;
  border-radius: 4px;
`;

const PortfolioCardCheckbox = styled.button`
  width: 24px;
  height: 24px;
`;

const PortfolioCardTitle = styled.div`
  width: 100%;
  height: 20px;
  color: black;
  ${({ theme }) => theme.text.bodyM_bold};
`;
const PortfolioCardContent = styled.div`
  width: 100%;
  height: auto;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;

const PortfolioCardContentTitle = styled.div`
  width: 100%;
  height: 12px;
  color: ${({ theme }) => theme.colors.gray[90]};
  ${({ theme }) => theme.text.labeS_bold};
`;

const MilestoneCardLabels = styled.div`
  height: 64px;
  padding: 2px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px 4px;
`;

const PortfolioCardFooter = styled.div`
  width: 100%;
  height: 22px;
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const DueDate = styled.div`
  width: auto;
  height: 17px;
  ${({ theme }) => theme.text.bodyS_bold};
  color: ${({ theme }) => theme.colors.gray[80]};
`;

export {
  PortfolioCardWrapper,
  PortfolioCardHeader,
  PortfolioCardStatusBar,
  PortfolioCardStatus,
  PortfolioCardCheckbox,
  PortfolioCardTitle,
  PortfolioCardContent,
  PortfolioCardContentTitle,
  MilestoneCardLabels,
  PortfolioCardFooter,
  DueDate,
};
