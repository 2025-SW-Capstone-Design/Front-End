interface label {
  labelId: number;
  name: string;
  color: string;
  description: string;
}

interface IssueLabelCreateRequest {
  title: string;
  description: string;
  color: string;
  projectId: number;
}

interface IssueLabelDeleteRequest {
  title: string;
  organizationName: string;
  repositoryName: string;
}

interface IssueLabelUpdateRequest {
  oldTitle: string;
  newTitle: string;
  description: string;
  color: string;
  organizationName: string;
  repositoryName: string;
  projectId: number;
}

export type {
  label,
  IssueLabelCreateRequest,
  IssueLabelDeleteRequest,
  IssueLabelUpdateRequest,
};
