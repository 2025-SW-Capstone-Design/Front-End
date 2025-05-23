import type { MeetingLogDetailResponse } from '../../apis/meetingLog/meetingLog.types';

interface MeetingCardProps {
  data: MeetingLogDetailResponse;
  teamId: number;
  refetch: () => void;
}

export { MeetingCardProps };
