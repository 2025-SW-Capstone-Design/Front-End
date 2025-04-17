import type { ComponentType } from 'react';

interface TextIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonType: 'primary' | 'secondary';
  icon?: ComponentType;
}

export { TextIconButtonProps };
