interface ImportTemplateModalProps {
  onClose: () => void;
  teamId: string;
  projectId: string;
  modalType: 'createAndEdit' | 'import';
  setTitle?: React.Dispatch<React.SetStateAction<string>>;
  setMarkDown?: React.Dispatch<React.SetStateAction<string>>;
}

export type { ImportTemplateModalProps };
