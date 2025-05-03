interface TextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export { TextButtonProps };
