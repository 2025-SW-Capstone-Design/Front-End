interface CreateTemplateModalProps {
  onClose: () => void;
  description: string;
  type: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
  handleTemplate: () => void;
}

export type { CreateTemplateModalProps };
