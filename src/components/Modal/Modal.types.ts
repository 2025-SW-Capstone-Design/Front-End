interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  leftButtonText: string;
  rightButtonText: string;
  rightButtonIcon?: string;
  onLeftButtonClick?: () => void;
  onRightButtonClick?: () => void;
}

export { ModalProps };
