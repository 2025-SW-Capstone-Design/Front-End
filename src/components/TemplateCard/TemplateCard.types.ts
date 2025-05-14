import type { IssueTemplateResponse } from '../../apis/template/template.types';

interface TemplateCardProps {
  template: IssueTemplateResponse;
  isSelected: boolean;
  onSelect: () => void;
  modalType: 'createAndEdit' | 'import';
  onClose?: () => void;
  setTitle?: React.Dispatch<React.SetStateAction<string>>;
  setMarkDown?: React.Dispatch<React.SetStateAction<string>>;
}

export { TemplateCardProps };
