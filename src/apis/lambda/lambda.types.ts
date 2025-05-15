interface PortfolioLambdaRequest {
  name: string;
  tech_stack: string;
  implemented_features: string;
}

interface PortfolioLambdaResponse {
  statusCode: number;
  headers: Record<string, string>;
  body: string;
}

export { PortfolioLambdaRequest, PortfolioLambdaResponse };
