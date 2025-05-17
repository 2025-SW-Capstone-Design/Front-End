import type { ChatRoomResponse } from '../../apis/meeting/meeting.types';

interface MeetingListProps {
  teamId: string;
  data: ChatRoomResponse;
  width?: string;
}

interface MeetingListStylesProps {
  width?: string;
}

export { MeetingListProps, MeetingListStylesProps };
