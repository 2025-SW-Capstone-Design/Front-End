interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonType: 'primary' | 'soft' | 'secondary' | 'tertiary';
  width?: string;
}

interface ButtonStylesProps {
  width?: string;
}

export { ButtonProps, ButtonStylesProps };
