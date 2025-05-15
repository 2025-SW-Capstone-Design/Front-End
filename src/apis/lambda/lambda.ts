import ApiBuilder from '../config/builder/ApiBuilder';
import type {
  PortfolioLambdaRequest,
  PortfolioLambdaResponse,
} from './lambda.types';

const BASE_URL = process.env.REACT_APP_API_GATEWAY_URL + '/portfolio';

const generatePortfolio = () => {
  return ApiBuilder.create<PortfolioLambdaRequest, PortfolioLambdaResponse>(
    BASE_URL,
  ).setMethod('POST');
};

export { generatePortfolio };
