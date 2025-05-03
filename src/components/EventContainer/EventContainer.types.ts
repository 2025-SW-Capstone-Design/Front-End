import type { PositionType } from '../Label/Label.types';

interface EventContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  taskName: string;
  time: string;
  containerType: 'small' | 'medium' | 'large';
  position: PositionType;
}

export { EventContainerProps };
