import type { IssueResponse } from '../../apis/task/task.types';

interface UpcomingTaskProps {
  issue: IssueResponse;
  dueDate: string;
}

export { UpcomingTaskProps };
