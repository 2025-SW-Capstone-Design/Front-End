interface PortfolioRequest {
  title: string;
  content: string;
}

interface PortfolioDetailResponse {
  title: string;
  content: string;
  createTime: string;
  modifyTime: string;
}

export { PortfolioRequest, PortfolioDetailResponse };
