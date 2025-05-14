import type { MilestoneResponse } from '~/apis/milestone/milestone.types';
import type { projectInfo } from '../../apis/project/project.types';

interface MilestoneModalProps {
  onClose: () => void;
  projects?: projectInfo[];
  teamId: number;
  projectId?: number | null;
  milestone?: MilestoneResponse;
}

export { MilestoneModalProps };
