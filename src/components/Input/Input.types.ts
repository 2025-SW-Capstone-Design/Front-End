type InputStatus = 'default' | 'error' | 'success' | 'disabled';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  status?: InputStatus;
  message?: string;
  placeholder?: string;
  width?: string;
}

interface InputStylesProps {
  width?: string;
}

export { InputProps, InputStylesProps, InputStatus };
