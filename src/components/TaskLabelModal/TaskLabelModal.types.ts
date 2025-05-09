import type { teamInfo } from '../../apis/team/team.types';

interface TaskLabelModalProps {
  teamInfo: teamInfo | null;
  onClose: () => void;
}

export { TaskLabelModalProps };
