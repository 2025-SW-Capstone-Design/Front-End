type MeetingContent = {
  time: string;
  speaker: string;
  content: string;
};

interface MeetingContentProps extends React.HTMLAttributes<HTMLDivElement> {
  contents: MeetingContent[];
  width?: string;
}
interface MeetingContentStylesProps {
  width?: string;
}

export { MeetingContentProps, MeetingContentStylesProps };
