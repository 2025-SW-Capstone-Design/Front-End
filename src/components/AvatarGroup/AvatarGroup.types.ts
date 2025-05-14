export interface AvatarMember {
  name: string;
  position?: string;
}

export interface AvatarGroupProps {
  members: AvatarMember[];
  maxVisible?: number;
}
