import type { MilestoneResponse } from '../../apis/milestone/milestone.types';

interface CardProps {
  cardType: 'milestone' | 'task';
  data: MilestoneResponse;
  projectId?: number;
}

export { CardProps };
