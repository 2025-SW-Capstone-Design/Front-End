import type { IssueResponse } from '../task/task.types';

interface MilestoneUpdateRequest {
  title: string;
  description: string;
  startDate: string;
  dueDate: string;
}

interface MilestoneCreateRequest {
  title: string;
  description: string;
  startDate: string;
  dueDate: string;
}

interface MilestoneResponse {
  milestoneId: number;
  title: string;
  description: string;
  creator: string;
  dueDate: string;
  startDate: string;
  status: string;
}

interface MilestoneDetailResponse {
  milestone: MilestoneResponse;
  issues: IssueResponse[];
}

interface MilestoneUpdateStatusRequest {
  status: string;
}

export {
  MilestoneUpdateRequest,
  MilestoneCreateRequest,
  MilestoneResponse,
  MilestoneDetailResponse,
  MilestoneUpdateStatusRequest,
};
