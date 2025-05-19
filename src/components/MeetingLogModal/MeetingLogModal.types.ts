import type { MeetingLogDetailResponse } from '../../apis/meetingLog/meetingLog.types';

interface MeetingLogModalProps {
  onClose: () => void;
  type: string;
  data: MeetingLogDetailResponse;
  teamId: number;
  refetch: () => void;
}

export { MeetingLogModalProps };
