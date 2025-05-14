import type { Theme } from '@emotion/react';

interface PositionInfo {
  key: PositionType;
  name: string;
  background: (theme: Theme) => string;
  outline: (theme: Theme) => string;
  color: (theme: Theme) => string;
}

interface LabelProps {
  position: PositionType;
  isClickable?: boolean;
  onChange?: (newPosition: PositionType) => void;
}

interface DropdownLabelMenuProps {
  onSelect: (position: PositionType) => void; // 선택된 값을 전달하는 콜백
  top: number; // 드롭다운 메뉴의 top 위치
  left: number; // 드롭다운 메뉴의 left 위치
}

type PositionType =
  | 'NONE'
  | 'BACKEND'
  | 'FRONTEND'
  | 'FULLSTACK'
  | 'MOBILE'
  | 'ANDROID'
  | 'IOS'
  | 'DEVOPS'
  | 'DBA'
  | 'PLANNER'
  | 'PM'
  | 'MARKETER'
  | 'DESIGNER'
  | 'QA'
  | 'ETC';

const Positions: Record<string, PositionInfo> = {
  NONE: {
    key: 'NONE',
    name: 'NONE',
    background: (theme) => theme.colors.gray[10],
    outline: (theme) => theme.colors.gray[40],
    color: (theme) => theme.colors.gray[80],
  },
  DESIGNER: {
    key: 'DESIGNER',
    name: 'DESIGNER',
    background: (theme) => theme.colors.purple[10],
    outline: (theme) => theme.colors.purple[30],
    color: (theme) => theme.colors.purple[40],
  },
  MARKETER: {
    key: 'MARKETER',
    name: 'MARKETER',
    background: (theme) => theme.colors.yellow[10],
    outline: (theme) => theme.colors.yellow[40],
    color: (theme) => theme.colors.yellow[60],
  },
  PLANNER: {
    key: 'PLANNER',
    name: 'PLANNER',
    background: (theme) => theme.colors.green[10],
    outline: (theme) => theme.colors.green[40],
    color: (theme) => theme.colors.green[70],
  },
  PM: {
    key: 'PM',
    name: 'PM',
    background: (theme) => theme.colors.green[10],
    outline: (theme) => theme.colors.green[40],
    color: (theme) => theme.colors.green[70],
  },
  QA: {
    key: 'QA',
    name: 'QA',
    background: (theme) => theme.colors.primary[10],
    outline: (theme) => theme.colors.primary[30],
    color: (theme) => theme.colors.primary[40],
  },
  ETC: {
    key: 'ETC',
    name: 'ETC',
    background: (theme) => theme.colors.primary[10],
    outline: (theme) => theme.colors.primary[30],
    color: (theme) => theme.colors.primary[40],
  },
  FULLSTACK: {
    key: 'FULLSTACK',
    name: 'FULLSTACK',
    background: (theme) => theme.colors.primary[10],
    outline: (theme) => theme.colors.primary[30],
    color: (theme) => theme.colors.primary[40],
  },
  BACKEND: {
    key: 'BACKEND',
    name: 'BACKEND',
    background: (theme) => theme.colors.red[10],
    outline: (theme) => theme.colors.red[30],
    color: (theme) => theme.colors.red[50],
  },
  DEVOPS: {
    key: 'DEVOPS',
    name: 'DEVOPS',
    background: (theme) => theme.colors.red[10],
    outline: (theme) => theme.colors.red[30],
    color: (theme) => theme.colors.red[50],
  },
  DBA: {
    key: 'DBA',
    name: 'DBA',
    background: (theme) => theme.colors.red[10],
    outline: (theme) => theme.colors.red[30],
    color: (theme) => theme.colors.red[50],
  },
  FRONTEND: {
    key: 'FRONTEND',
    name: 'FRONTEND',
    background: (theme) => theme.colors.orange[10],
    outline: (theme) => theme.colors.orange[30],
    color: (theme) => theme.colors.orange[50],
  },
  MOBILE: {
    key: 'MOBILE',
    name: 'MOBILE',
    background: (theme) => theme.colors.orange[10],
    outline: (theme) => theme.colors.orange[30],
    color: (theme) => theme.colors.orange[50],
  },
  ANDROID: {
    key: 'ANDROID',
    name: 'ANDROID',
    background: (theme) => theme.colors.orange[10],
    outline: (theme) => theme.colors.orange[30],
    color: (theme) => theme.colors.orange[50],
  },
  IOS: {
    key: 'IOS',
    name: 'IOS',
    background: (theme) => theme.colors.orange[10],
    outline: (theme) => theme.colors.orange[30],
    color: (theme) => theme.colors.orange[50],
  },
};

export {
  PositionInfo,
  Positions,
  PositionType,
  LabelProps,
  DropdownLabelMenuProps,
};
