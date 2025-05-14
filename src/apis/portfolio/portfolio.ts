import ApiBuilder from '../config/builder/ApiBuilder';
import type {
  PortfolioDetailResponse,
  PortfolioRequest,
} from './portfolio.types';

const END_POINT = {
  PORTFOLIO: `/api/v1/portfolios`,
  PORTFOLIO_DETAIL: (portfolioId: number) =>
    `/api/v1/portfolios/${portfolioId}`,
};

const getPortfolioDetail = (portfolioId: number) => {
  return ApiBuilder.create<PortfolioDetailResponse, void>(
    END_POINT.PORTFOLIO_DETAIL(portfolioId),
  ).setMethod('GET');
};

const updatePortfolio = (portfolioId: number) => {
  return ApiBuilder.create<number, PortfolioRequest>(
    END_POINT.PORTFOLIO_DETAIL(portfolioId),
  ).setMethod('PUT');
};

const deletePortfolio = (portfolioId: number) => {
  return ApiBuilder.create<void, void>(
    END_POINT.PORTFOLIO_DETAIL(portfolioId),
  ).setMethod('DELETE');
};

const createPortfolio = () => {
  return ApiBuilder.create<number, PortfolioRequest>(
    END_POINT.PORTFOLIO,
  ).setMethod('POST');
};

const getPortfolios = () => {
  return ApiBuilder.create<PortfolioDetailResponse[], void>(
    END_POINT.PORTFOLIO,
  ).setMethod('GET');
};

export {
  getPortfolioDetail,
  getPortfolios,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
};
