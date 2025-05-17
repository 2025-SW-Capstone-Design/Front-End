import ApiBuilder from '../config/builder/ApiBuilder';
import type {
  ChatRoomMemberResponse,
  ChatRoomResponse,
  IssuedTokenRequest,
  IssuedTokenResponse,
  SendVoiceDataRequest,
} from './meeting.types';

const END_POINT = {
  ISSUED_TOKEN: (teamId: number) => `/api/v1/open-vidu/${teamId}/token`,
  GET_CHAT_ROOMS: (teamId: number) => `/api/v1/teams/${teamId}/chat-rooms`,
  POST_CHAT_ROOM_SUMMARY: (teamId: number, chatRoomId: number) =>
    `/api/v1/teams/${teamId}/chat-rooms/${chatRoomId}/summary`,
  GET_CHAT_ROOM_MEMBERS: (teamId: number, chatRoomId: number) =>
    `/api/v1/teams/${teamId}/chat-rooms/${chatRoomId}/members`,
  JOIN_MEETING: (teamId: number, chatRoomId: number) =>
    `/api/v1/teams/${teamId}/chat-rooms/${chatRoomId}/members`,
};

const issuedToken = (teamId: number) => {
  return ApiBuilder.create<IssuedTokenRequest, IssuedTokenResponse>(
    END_POINT.ISSUED_TOKEN(teamId),
  ).setMethod('POST');
};

const getChatRooms = (teamId: number) => {
  return ApiBuilder.create<void, ChatRoomResponse[]>(
    END_POINT.GET_CHAT_ROOMS(teamId),
  ).setMethod('GET');
};

const sendVoiceData = (teamId: number, chatRoomId: number) => {
  return ApiBuilder.create<SendVoiceDataRequest, void>(
    END_POINT.POST_CHAT_ROOM_SUMMARY(teamId, chatRoomId),
  ).setMethod('POST');
};

const getChatRoomMember = (teamId: number, chatRoomId: number) => {
  return ApiBuilder.create<void, ChatRoomMemberResponse[]>(
    END_POINT.GET_CHAT_ROOM_MEMBERS(teamId, chatRoomId),
  ).setMethod('GET');
};

const joinChatRoomMember = (teamId: number, chatRoomId: number) => {
  return ApiBuilder.create<void, void>(
    END_POINT.JOIN_MEETING(teamId, chatRoomId),
  ).setMethod('POST');
};

export {
  issuedToken,
  getChatRooms,
  sendVoiceData,
  getChatRoomMember,
  joinChatRoomMember,
};
