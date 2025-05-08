import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalPortal from '../Modal/ModalPortal';
import * as S from './TaskSettingModal.styles';

import Button from '../Button/Button';
import IconButton from '../IconButton/IconButton';
import Dropdown from '../Dropdown/Dropdown';

import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import { getProjects } from '../../apis/project/project';
import { getLabels } from '../../apis/label/label';

import type { label } from '../../apis/label/label.types';
import type { TaskSettingModalProps } from './TaskSettingModal.types';
import TaskLabel from '../TaskLabel/TaskLabel';
import { useTaskLabelStore } from '../../state/taskLabelState';

function TaskSettingModal({
  teamId,
  onClose,
  modalType,
}: TaskSettingModalProps) {
  const navigate = useNavigate();
  const { data: projects } = useApiQuery(getProjects(teamId), 'projects');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null,
  );
  const [labelList, setLabelList] = useState<label[]>([]);

  useEffect(() => {
    const fetchLabels = async () => {
      if (!selectedProjectId) return;

      try {
        const response = await getLabels(teamId, selectedProjectId).execute();
        setLabelList(response.data);
      } catch (error) {
        setLabelList([]);
      }
    };

    fetchLabels();
    useTaskLabelStore.setState({ selectedLabels: [] });
  }, [selectedProjectId, teamId]);

  const isTask = modalType === 'task';
  const title = isTask ? 'Task 생성' : 'Template 생성';
  const subtitle = isTask
    ? 'Task를 생성할 수 있어요'
    : 'Task Template를 생성할 수 있어요';

  const handleProjectSelect = (projectId: number) => {
    setSelectedProjectId(projectId);
  };

  const handleCreateClick = () => {
    if (!selectedProjectId) return;

    const path = isTask
      ? `/team/${teamId}/project/${selectedProjectId}/task/create`
      : `/team/${teamId}/project/${selectedProjectId}/template/create`;

    navigate(path);
  };

  return (
    <ModalPortal>
      <S.ModalBackground>
        <S.ModalWrapper>
          <S.ModalHeader>
            <S.ModalTitle>{title}</S.ModalTitle>
            <S.ModalSubTitle>{subtitle}</S.ModalSubTitle>
          </S.ModalHeader>

          {isTask && (
            <S.LabelContainer>
              <S.LabelTitle>Task 라벨을 선택해주세요.</S.LabelTitle>
              <S.Labels>
                {labelList?.map((label) => (
                  <TaskLabel
                    key={label.labelId}
                    labelInfo={label}
                    isClickable
                  />
                ))}
              </S.Labels>
            </S.LabelContainer>
          )}

          <S.MilestoneContainer>
            <S.MilestoneTitle>프로젝트 선택</S.MilestoneTitle>
            <Dropdown
              options={projects || []}
              placeholder="프로젝트를 선택하세요."
              onSelect={handleProjectSelect}
              dropdownType="default"
              width="100%"
            />
          </S.MilestoneContainer>

          <S.ButtonContainer>
            <Button buttonType="secondary" width="120px" onClick={onClose}>
              취소
            </Button>
            <IconButton
              buttonType="primary"
              width="120px"
              onClick={handleCreateClick}
              disabled={!selectedProjectId}
            >
              {title}
            </IconButton>
          </S.ButtonContainer>
        </S.ModalWrapper>
      </S.ModalBackground>
    </ModalPortal>
  );
}

export default TaskSettingModal;
