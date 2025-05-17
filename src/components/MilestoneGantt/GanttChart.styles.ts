import styled from '@emotion/styled';
import type { TaskBarProps } from './GanttChart.types';

const GanttContainer = styled.div`
  width: 100%;
  padding: 0 12px 12px 12px;
  background-color: #fff;
  border-radius: 10px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const GanttHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const ScrollContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  max-width: 100%;
  position: relative;
`;

const GanttTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

const ProgressText = styled.div`
  font-size: 0.875rem;
  color: #4169e1;
  font-weight: 600;
`;

const TimelineHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #eaeaea;
  position: sticky;
  top: 0;
  z-index: 5;
  background-color: #fff;
`;

const TimelineCell = styled.div`
  width: 120px;
  min-width: 80px;
  padding: 10px 0;
  text-align: center;
  font-size: 0.875rem;
  color: #666;
  font-weight: 500;
  flex-shrink: 0;
  position: relative;
`;

const GanttContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin-top: 10px;
  height: calc(5vh + 27vw);
`;

const TimelineGrid = styled.div`
  display: flex;

  height: 100%;
  position: absolute;

  left: 0;
  top: 0;

  z-index: 1;
  width: 100%;
`;

const GridLine = styled.div`
  width: 120px;
  flex-shrink: 0;
  height: calc(5vh + 27vw);
  border-right: 3px solid ${(props) => props.theme.colors.gray[40]};
`;

const TaskRows = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 70px;
  position: relative;
  z-index: 2;
`;

const TaskRow = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 15px;
`;

const TaskBar = styled.div<TaskBarProps>`
  display: flex;
  flex-direction: column;

  position: absolute;
  z-index: 3;

  min-width: 100px;
  height: 70px;

  top: 20px;
  padding: 12px 20px;

  border-radius: 5px;

  top: 10px;
  gap: 12px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  background-color: ${(props) =>
    props.status === 'DONE'
      ? `${props.theme.colors.green[10]}`
      : props.status === 'IN_PROGRESS'
        ? `${props.theme.colors.red[10]}`
        : `${props.theme.colors.primary[10]}`};
`;

const TaskTitle = styled.div`
  color: ${(props) => props.theme.colors.gray[90]};
  font-size: 14px;
  font-weight: 700;
`;

const TaskDate = styled.div`
  color: ${(props) => props.theme.colors.gray[70]};
  font-size: 15px;
  font-weight: 500;
`;

const ProgressMarker = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3px;
  background-color: ${(props) => props.theme.colors.primary[30]};
  z-index: 4;
  opacity: 0.6;
`;

const ProgressDot = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.theme.colors.primary[30]};
  border-radius: 50%;
  position: absolute;

  bottom: 0;
  left: -4.5px;
`;

const TodayButton = styled.button`
  background-color: #f5f7ff;
  color: #4169e1;
  border: none;
  padding: 6px 12px;
  border-radius: 5px;
  font-size: 0.75rem;
  cursor: pointer;
  white-space: nowrap;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export {
  GanttContainer,
  GanttHeader,
  GanttTitle,
  ProgressText,
  ScrollContainer,
  ContentWrapper,
  TimelineHeader,
  TimelineCell,
  TimelineGrid,
  GanttContent,
  GridLine,
  TaskRows,
  TaskRow,
  TaskBar,
  TaskTitle,
  TaskDate,
  ProgressMarker,
  ProgressDot,
  TodayButton,
};
