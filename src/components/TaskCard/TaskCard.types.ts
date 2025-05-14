import type { IssueResponse } from '../../apis/task/task.types';

export interface IssueCardProps {
  task: IssueResponse;
  projectId: number;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}
