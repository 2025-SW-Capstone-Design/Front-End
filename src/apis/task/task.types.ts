import type { label } from '../label/label.types';

interface IssueResponse {
  issueId: number;
  title: string;
  content: string;
  creator: string;
  status: string;
  labels: label[];
}

interface IssueCreateRequest {
  milestoneId: number;
  organizationName: string;
  repositoryName: string;
  title: string;
  content: string;
  assignees: string;
  labels: string[];
}

interface IssueUpdateRequest {
  organizationName: string;
  repositoryName: string;
  title: string;
  content: string;
  labels: string[];
  assignees: string;
  state: string;
  teamMemberId: number;
  milestoneId: number;
}

interface IssueClosedRequest {
  organizationName: string;
  repositoryName: string;
  status: string;
  labels: string[];
}

interface IssueDetailResponse {
  issueDetail: IssueResponse;
  teamMemberId: number;
}

export {
  IssueResponse,
  IssueClosedRequest,
  IssueCreateRequest,
  IssueUpdateRequest,
  IssueDetailResponse,
};
