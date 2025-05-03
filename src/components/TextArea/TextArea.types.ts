interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  width?: string;
  height?: string;
}

interface TextAreaStylesProps {
  width?: string;
  height?: string;
}

export { TextAreaProps, TextAreaStylesProps };
