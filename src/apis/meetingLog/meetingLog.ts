import ApiBuilder from '../config/builder/ApiBuilder';
import type {
  MeetingLogDetailResponse,
  MeetingLogUpdateRequest,
} from './meetingLog.types';

const END_POINT = {
  GET_LIST: (teamId: number) => `/api/v1/${teamId}/meeting-logs`,
  UPDATE: (teamId: number, meetingLogId: number) =>
    `/api/v1/${teamId}/meeting-logs/${meetingLogId}`,
  GET_DETAIL: (teamId: number, meetingLogId: number) =>
    `/api/v1/${teamId}/meeting-logs/${meetingLogId}`,
};

const getMeetingLogList = (teamId: number) => {
  return ApiBuilder.create<void, MeetingLogDetailResponse[]>(
    END_POINT.GET_LIST(teamId),
  ).setMethod('GET');
};

const getMeetingLogDetail = (teamId: number, meetingLogId: number) => {
  return ApiBuilder.create<void, MeetingLogDetailResponse>(
    END_POINT.GET_DETAIL(teamId, meetingLogId),
  ).setMethod('GET');
};

const updateMeetingLog = (teamId: number, meetingLogId: number) => {
  return ApiBuilder.create<MeetingLogUpdateRequest, void>(
    END_POINT.UPDATE(teamId, meetingLogId),
  ).setMethod('PATCH');
};

export { getMeetingLogDetail, getMeetingLogList, updateMeetingLog };
