interface MeetingLogDetailResponse {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

interface MeetingLogUpdateRequest {
  title: string;
  content: string;
}

export { MeetingLogDetailResponse, MeetingLogUpdateRequest };
