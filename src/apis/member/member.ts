import ApiBuilder from '../config/builder/ApiBuilder';
import type { MemberDetailResponse } from './member.types';

const getMemberDetail = () => {
  return ApiBuilder.create<void, MemberDetailResponse>(
    `/api/v1/members`,
  ).setMethod('GET');
};

export { getMemberDetail };
