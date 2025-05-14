interface IssueTemplateRequest {
  title: string;
  description: string;
  content: string;
  type: string;
  projectId: number;
}

interface IssueTemplateResponse {
  id: number;
  title: string;
  description: string;
  content: string;
  type: string;
}

export { IssueTemplateRequest, IssueTemplateResponse };
