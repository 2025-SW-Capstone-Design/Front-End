interface TaskBarProps {
  status: string;
}

interface GanttChartProps {
  id: string;
  name: string;
  start: string;
  end: string;
  status: '완료' | '진행중' | '진행전';
}

export { TaskBarProps, GanttChartProps };
