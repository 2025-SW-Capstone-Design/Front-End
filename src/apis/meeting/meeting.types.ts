interface IssuedTokenRequest {
  roomName: string;
}

interface IssuedTokenResponse {
  token: string;
  roomName: string;
  memberId: number;
  teamId: number;
}

interface ChatRoomResponse {
  id: number;
  title: string;
  active: boolean;
}

interface SendVoiceDataRequest {
  isFinal: boolean;
  text: string;
}

interface ChatRoomMemberResponse {
  memberId: number;
  position: string;
  role: string;
  nickname: string;
  profileImageURL: string;
}

export {
  IssuedTokenRequest,
  IssuedTokenResponse,
  ChatRoomResponse,
  SendVoiceDataRequest,
  ChatRoomMemberResponse,
};
