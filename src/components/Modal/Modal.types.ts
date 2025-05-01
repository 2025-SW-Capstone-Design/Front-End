interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  leftButtonText: string;
  rightButtonText: string;
  rightButtonIcon?: string;
}

export { ModalProps };
