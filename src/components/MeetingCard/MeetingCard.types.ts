interface MeetingCardProps {
  title: string;
  meetingTime: string;
  keywords: string[];
  isEditing: boolean;
  isSelected: boolean;
  onSelect: (isSelected: boolean) => void;
}

export { MeetingCardProps };
