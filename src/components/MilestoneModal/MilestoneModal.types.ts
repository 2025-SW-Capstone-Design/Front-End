import type { projectInfo } from '../../apis/project/project.types';

interface MilestoneModalProps {
  onClose: () => void;
  projects?: projectInfo[];
  teamId: number;
}

export { MilestoneModalProps };
