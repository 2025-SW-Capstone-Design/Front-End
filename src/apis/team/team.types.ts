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

export type { teamInfo, teamCreateRequest, teamInvitationRequest };
