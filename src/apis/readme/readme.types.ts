interface ReadmeResponse {
  readmeId: number;
  title: string;
  version: number;
  writer: string;
  isLatest: boolean;
}

interface ReadmeDetailResponse {
  readmeId: number;
  title: string;
  content: string;
  version: number;
  isLatest: boolean;
  writer: string;
  projectName: string;
}

interface ReadmeRequest {
  title: string;
  content: string;
}

export type { ReadmeDetailResponse, ReadmeRequest, ReadmeResponse };
