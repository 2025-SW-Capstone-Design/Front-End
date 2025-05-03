interface EmailTagProps extends React.HTMLAttributes<HTMLDivElement> {
  email: string;
  onRemove?: () => void;
}

export { EmailTagProps };
