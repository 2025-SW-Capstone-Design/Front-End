import type { MilestoneResponse } from '~/apis/milestone/milestone.types';

interface KanbanListProps {
  title: string;
  milestones: MilestoneResponse[];
  onDropMilestone: (milestone: MilestoneResponse) => void;
}

export type { KanbanListProps };
