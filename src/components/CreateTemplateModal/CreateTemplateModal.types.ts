interface CreateTemplateModalProps {
  onClose: () => void;
  description: string;
  type: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
  handleCreateTemplate: () => void;
}

export type { CreateTemplateModalProps };
