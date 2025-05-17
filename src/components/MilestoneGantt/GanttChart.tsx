import React, { useEffect, useState, useRef } from 'react';
import * as S from './GanttChart.styles';
import type { MilestoneResponse } from '../../apis/milestone/milestone.types';

const formatDate = (date: Date) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')}`;
};

function GanttChart({ milestones = [] }: { milestones: MilestoneResponse[] }) {
  const [timelineDates, setTimelineDates] = useState<Date[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const CELL_WIDTH = 120;
  const today = new Date();

  useEffect(() => {
    const currentDate = new Date();
    const startDate = new Date(currentDate);
    startDate.setMonth(startDate.getMonth() - 1);
    startDate.setDate(1);

    const endDate = new Date(currentDate);
    endDate.setMonth(endDate.getMonth() + 2);
    endDate.setDate(0);

    const dates: Date[] = [];
    const tempDate = new Date(startDate);
    while (tempDate <= endDate) {
      dates.push(new Date(tempDate));
      tempDate.setDate(tempDate.getDate() + 1);
    }

    setTimelineDates(dates);

    setTimeout(() => {
      if (scrollContainerRef.current) {
        const todayIndex = dates.findIndex(
          (date) =>
            date.getFullYear() === currentDate.getFullYear() &&
            date.getMonth() === currentDate.getMonth() &&
            date.getDate() === currentDate.getDate(),
        );
        if (todayIndex !== -1) {
          const scrollPosition =
            todayIndex * CELL_WIDTH -
            scrollContainerRef.current.clientWidth / 2 +
            CELL_WIDTH / 2;
          scrollContainerRef.current.scrollTo({
            left: scrollPosition,
            behavior: 'smooth',
          });
        }
      }
    }, 0);
  }, []);

  const calculateTaskPosition = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const startIndex = timelineDates.findIndex(
      (date) =>
        date.getFullYear() === start.getFullYear() &&
        date.getMonth() === start.getMonth() &&
        date.getDate() === start.getDate(),
    );
    const endIndex = timelineDates.findIndex(
      (date) =>
        date.getFullYear() === end.getFullYear() &&
        date.getMonth() === end.getMonth() &&
        date.getDate() === end.getDate(),
    );

    if (startIndex === -1 || endIndex === -1) {
      return { left: '0px', width: '0px' };
    }

    const left = startIndex * CELL_WIDTH;
    const width = (endIndex - startIndex + 1) * CELL_WIDTH;

    return {
      left: `${left}px`,
      width: `${width}px`,
    };
  };

  return (
    <S.GanttContainer>
      <S.GanttHeader>
        <S.GanttTitle>Gantt Chart로 전체 일정 보기</S.GanttTitle>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <S.TodayButton
            onClick={() => {
              if (scrollContainerRef.current) {
                const todayIndex = timelineDates.findIndex(
                  (date) =>
                    date.getFullYear() === today.getFullYear() &&
                    date.getMonth() === today.getMonth() &&
                    date.getDate() === today.getDate(),
                );
                if (todayIndex !== -1) {
                  const scrollPosition =
                    todayIndex * CELL_WIDTH -
                    scrollContainerRef.current.clientWidth / 2 +
                    CELL_WIDTH / 2;
                  scrollContainerRef.current.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth',
                  });
                }
              }
            }}
          >
            오늘 날짜로 이동
          </S.TodayButton>
        </div>
      </S.GanttHeader>

      <S.ScrollContainer ref={scrollContainerRef}>
        <S.ContentWrapper>
          <S.TimelineHeader>
            {timelineDates.map((date, index) => (
              <S.TimelineCell key={index}>{formatDate(date)}</S.TimelineCell>
            ))}
          </S.TimelineHeader>

          <S.GanttContent>
            <S.TimelineGrid>
              {timelineDates.map((_, index) => (
                <S.GridLine key={index} />
              ))}
            </S.TimelineGrid>

            <S.TaskRows>
              {milestones.map((milestone) => {
                const position = calculateTaskPosition(
                  milestone.startDate,
                  milestone.dueDate,
                );
                return (
                  <S.TaskRow key={milestone.milestoneId}>
                    <S.TaskBar
                      style={{
                        left: position.left,
                        width: position.width,
                      }}
                      status={milestone.status}
                    >
                      <S.TaskDate>
                        {formatDate(new Date(milestone?.startDate))} -{' '}
                        {formatDate(new Date(milestone?.dueDate))}
                      </S.TaskDate>
                      <S.TaskTitle>{milestone.title}</S.TaskTitle>
                    </S.TaskBar>
                  </S.TaskRow>
                );
              })}
            </S.TaskRows>
            {(() => {
              const todayIndex = timelineDates.findIndex(
                (date) =>
                  date.getFullYear() === today.getFullYear() &&
                  date.getMonth() === today.getMonth() &&
                  date.getDate() === today.getDate(),
              );
              if (todayIndex !== -1) {
                const left = todayIndex * CELL_WIDTH - 1.7;
                return (
                  <S.ProgressMarker style={{ left: `${left}px` }}>
                    <S.ProgressDot />
                  </S.ProgressMarker>
                );
              }
              return null;
            })()}
          </S.GanttContent>
        </S.ContentWrapper>
      </S.ScrollContainer>
    </S.GanttContainer>
  );
}

export default GanttChart;
