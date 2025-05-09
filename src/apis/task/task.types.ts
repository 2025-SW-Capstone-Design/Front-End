import type { label } from '../label/label.types';

interface IssueResponse {
  issueId: number;
  title: string;
  content: string;
  creator: string;
  status: string;
  labels: label[];
}

export { IssueResponse };
