import ApiBuilder from '../config/builder/ApiBuilder';
import type {
  IssueTemplateRequest,
  IssueTemplateResponse,
} from './template.types';

const END_POINT = {
  TEMPLATE: (teamId: number) => `/api/v1/teams/${teamId}/issue-templates`,
  TEMPLATE_DETAIL: (teamId: number, templateId: number) =>
    `/api/v1/teams/${teamId}/issue-templates/${templateId}`,
};

const createTemplate = (teamId: number) => {
  return ApiBuilder.create<IssueTemplateRequest, number>(
    END_POINT.TEMPLATE(teamId),
  ).setMethod('POST');
};

const getTemplateDetail = (teamId: number, templateId: number) => {
  return ApiBuilder.create<IssueTemplateResponse, void>(
    END_POINT.TEMPLATE_DETAIL(teamId, templateId),
  ).setMethod('GET');
};

const deleteTemplate = (teamId: number, templateId: number) => {
  return ApiBuilder.create<void, void>(
    END_POINT.TEMPLATE_DETAIL(teamId, templateId),
  ).setMethod('DELETE');
};

const updateTemplate = (teamId: number, templateId: number) => {
  return ApiBuilder.create<IssueTemplateRequest, void>(
    END_POINT.TEMPLATE_DETAIL(teamId, templateId),
  ).setMethod('PATCH');
};

const getTemplates = (teamId: number) => {
  return ApiBuilder.create<IssueTemplateResponse[], void>(
    END_POINT.TEMPLATE(teamId),
  ).setMethod('GET');
};

export {
  createTemplate,
  getTemplateDetail,
  deleteTemplate,
  updateTemplate,
  getTemplates,
};
