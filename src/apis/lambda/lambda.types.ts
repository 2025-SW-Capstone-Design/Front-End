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

interface ReadmeLambdaRequest {
  project_name: string;
  project_description: string;
  tech_stack: string;
  implemented_features: string;
}

interface ReadmeLambdaResponse {
  statusCode: number;
  headers: Record<string, string>;
  body: string;
}

export {
  PortfolioLambdaRequest,
  PortfolioLambdaResponse,
  ReadmeLambdaRequest,
  ReadmeLambdaResponse,
};
