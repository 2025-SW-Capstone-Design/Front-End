import React, { useState } from 'react';
import * as S from './MilestoneCalendar.styles';
import { Calendar, dateFnsLocalizer, type Event } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { ko } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import type { MilestoneResponse } from '../../apis/milestone/milestone.types';
import CustomToolbar from './CustomToolbar/CustomToolbar';

const locales = { ko };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface Props {
  milestones: MilestoneResponse[];
}

const MilestoneCalendar: React.FC<Props> = ({ milestones }) => {
  const [selectedMilestone, setSelectedMilestone] =
    useState<MilestoneResponse | null>(null);

  const events: Event[] = milestones.map((milestone) => ({
    id: milestone.milestoneId,
    title: milestone.title,
    start: new Date(milestone.startDate),
    end: new Date(milestone.dueDate),
    allDay: true,
    resource: milestone,
  }));

  const handleSelectEvent = (event: Event) => {
    const milestone = event.resource as MilestoneResponse;
    setSelectedMilestone(milestone);
  };

  const closeModal = () => setSelectedMilestone(null);
  const eventStyleGetter = (event: Event) => {
    const milestone = event.resource as MilestoneResponse;

    let backgroundColor = '';

    switch (milestone.status) {
      case 'NOT_STARTED':
        backgroundColor = '#EEF0FF';
        break;
      case 'IN_PROGRESS':
        backgroundColor = '#FFD1D6';
        break;
      case 'DONE':
        backgroundColor = '#DAFEF3';
        break;
    }

    return {
      style: {
        backgroundColor,
        borderRadius: '4px',
        border: 'none',
        color: 'white',
        padding: '2px 4px',
        fontWeight: 'bold',
      },
    };
  };

  return (
    <>
      {selectedMilestone && (
        <S.ModalBackground onClick={closeModal}>
          <S.ModalWrapper onClick={(e) => e.stopPropagation()}>
            <S.ModalHeader>
              <S.ModalTitle>{selectedMilestone.title}</S.ModalTitle>
            </S.ModalHeader>
            <S.ModalDescription>
              {selectedMilestone.description}
            </S.ModalDescription>

            <S.ModalInfoSection>
              <S.InfoItem>
                <span>작성자:</span>
                <span>{selectedMilestone.creator}</span>
              </S.InfoItem>
              <S.InfoItem>
                <span>시작일:</span>
                <span>{selectedMilestone.startDate}</span>
              </S.InfoItem>
              <S.InfoItem>
                <span>마감일:</span>
                <span>{selectedMilestone.dueDate}</span>
              </S.InfoItem>
              <S.InfoItem>
                <span>상태:</span>
                <span>{selectedMilestone.status}</span>
              </S.InfoItem>
            </S.ModalInfoSection>
          </S.ModalWrapper>
        </S.ModalBackground>
      )}
      <S.CalendarWrapper>
        <S.GlobalCalendarStyle>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            defaultView="month"
            views={['month']}
            culture="ko"
            onSelectEvent={handleSelectEvent}
            components={{ toolbar: CustomToolbar }}
            eventPropGetter={eventStyleGetter}
          />
        </S.GlobalCalendarStyle>
      </S.CalendarWrapper>
    </>
  );
};

export default MilestoneCalendar;
