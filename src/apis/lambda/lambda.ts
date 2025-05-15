import ApiBuilder from '../config/builder/ApiBuilder';
import type {
  PortfolioLambdaRequest,
  PortfolioLambdaResponse,
  ReadmeLambdaRequest,
  ReadmeLambdaResponse,
} from './lambda.types';

const PORTFOLIO_BASE_URL = process.env.REACT_APP_API_GATEWAY_URL + '/portfolio';
const README_BASE_URL = process.env.REACT_APP_API_GATEWAY_URL + '/readme';

const generatePortfolio = () => {
  return ApiBuilder.create<PortfolioLambdaRequest, PortfolioLambdaResponse>(
    PORTFOLIO_BASE_URL,
  ).setMethod('POST');
};

const generateReadme = () => {
  return ApiBuilder.create<ReadmeLambdaRequest, ReadmeLambdaResponse>(
    README_BASE_URL,
  ).setMethod('POST');
};

export { generatePortfolio, generateReadme };
