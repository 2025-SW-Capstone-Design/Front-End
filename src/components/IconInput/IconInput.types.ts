interface IconInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  width?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IconInputStylesProps {
  width?: string;
}

export { IconInputProps, IconInputStylesProps };
