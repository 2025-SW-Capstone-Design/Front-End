interface ImportTemplateModalProps {
  onClose: () => void;
  teamId: string;
  projectId: string;
  modalType: 'createAndEdit' | 'import';
}

export type { ImportTemplateModalProps };
