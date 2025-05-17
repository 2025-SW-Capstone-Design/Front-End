import React, { useState } from 'react';
import * as S from './CalendarPage.styles';
import { useCurrentTeam } from '../../hooks/useCurrentTeam';

import BackIcon from '../../assets/icon/backIcon.svg';
import plusIcon from '../../assets/icon/white_plus.svg';

import { useNavigate } from 'react-router-dom';
import IconButton from '../../components/IconButton/IconButton';
import TaskSettingModal from '../../components/TaskSettingModal/TaskSettingModal';
import Button from '../../components/Button/Button';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import { getMilesotnes } from '../../apis/milestone/milestone';
import MilestoneCalendar from '../../components/MilestoneCalendar/MilestoneCalendar';

const CalendarPage = () => {
  const currentTeam = useCurrentTeam();
  const navigate = useNavigate();

  const [isOpenTaskModal, setIsOpenTaskModal] = useState(false);
  const [isOpenTaskTemplateModal, setIsOpenTaskTemplateModal] = useState(false);

  const { data: milestones } = useApiQuery(
    getMilesotnes(currentTeam?.id as number),
    ['milestones', currentTeam?.id],
  );

  const handleOpenModal = (type: 'task' | 'template') => {
    type === 'task'
      ? setIsOpenTaskModal(true)
      : setIsOpenTaskTemplateModal(true);
  };

  const handleCloseModal = (type: 'task' | 'template') => {
    type === 'task'
      ? setIsOpenTaskModal(false)
      : setIsOpenTaskTemplateModal(false);
  };

  const renderTaskModal = () => {
    if (!currentTeam) return null;

    return (
      <>
        {isOpenTaskModal && (
          <TaskSettingModal
            teamId={Number(currentTeam.id)}
            onClose={() => handleCloseModal('task')}
            modalType="task"
          />
        )}
        {isOpenTaskTemplateModal && (
          <TaskSettingModal
            teamId={Number(currentTeam.id)}
            onClose={() => handleCloseModal('template')}
            modalType="taskTemplate"
          />
        )}
      </>
    );
  };

  return (
    <>
      {renderTaskModal()}
      <S.CalendarContainer>
        <S.CalendarHeader>
          <S.CalendarHeaderBack
            onClick={() => navigate(`/team/${currentTeam?.id}`)}
          >
            <img src={BackIcon} alt="back" />
            돌아가기
          </S.CalendarHeaderBack>
          <S.CalendarHeaderTeamName>
            {currentTeam?.name}
          </S.CalendarHeaderTeamName>
          <S.CalendarHeaderButtonWrapper>
            <Button
              buttonType="secondary"
              width="154px"
              onClick={() => handleOpenModal('template')}
            >
              Task Template
            </Button>
            <IconButton
              buttonType="tertiary"
              width="154px"
              onClick={() => handleOpenModal('task')}
            >
              <img src={plusIcon} alt="plus" />
              Task 생성
            </IconButton>
          </S.CalendarHeaderButtonWrapper>
          <S.CalendarMainContent>
            <S.CalendarMainContentText>캘린더</S.CalendarMainContentText>
            <MilestoneCalendar milestones={milestones || []} />
          </S.CalendarMainContent>
        </S.CalendarHeader>
      </S.CalendarContainer>
    </>
  );
};

export default CalendarPage;
