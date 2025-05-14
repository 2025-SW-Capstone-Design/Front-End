import type { MilestoneResponse } from '~/apis/milestone/milestone.types';

interface KanbanListProps {
  title: string;
  milestones: MilestoneResponse[];
  onDropMilestone: (milestone: MilestoneResponse) => void;
  getProjectIdByMilestoneId: (milestoneId: number) => number | undefined;
}

export type { KanbanListProps };
