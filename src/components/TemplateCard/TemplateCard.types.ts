import type { IssueTemplateResponse } from '../../apis/template/template.types';

interface TemplateCardProps {
  template: IssueTemplateResponse;
  isSelected: boolean;
  onSelect: () => void;
  modalType: 'createAndEdit' | 'import';
}

export { TemplateCardProps };
