interface teamInfo {
  id: number;
  name: string;
  description: string;
  organizationName: string;
}

interface teamCreateRequest {
  name: string;
  description: string;
  organizationName: string;
}

interface teamInvitationRequest {
  emails: string[];
}

interface teamJoinRequest {
  invitationCode: string;
}

export type {
  teamInfo,
  teamCreateRequest,
  teamInvitationRequest,
  teamJoinRequest,
};
