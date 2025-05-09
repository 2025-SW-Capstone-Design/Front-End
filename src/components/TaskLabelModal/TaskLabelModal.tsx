import React, { useState } from 'react';
import * as S from './TaskLableModal.styles';
import ModalPortal from '../Modal/ModalPortal';
import Dropdown from '../Dropdown/Dropdown';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import { getProjects } from '../../apis/project/project';
import type { TaskLabelModalProps } from './TaskLabelModal.types';
import TaskLabel from '../TaskLabel/TaskLabel';
import { SketchPicker } from 'react-color';
import type { ColorResult } from 'react-color';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';
import { useTaskLabels } from '../../hooks/useTaskLabels';
import type { label } from '../../apis/label/label.types';

const TaskLabelModal = ({ teamInfo, onClose }: TaskLabelModalProps) => {
  const { data: projects } = useApiQuery(
    getProjects(teamInfo?.id as number),
    'projects',
  );

  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null,
  );
  const [selectedProjectName, setSelectedProjectName] = useState<string | null>(
    null,
  );

  const { labels, addLabel, editLabel, removeLabel } = useTaskLabels(
    teamInfo?.id,
    selectedProjectId,
  );

  const [displayEdit, setDisplayEdit] = useState<boolean>(false);
  const [editLabelData, setEditLabelData] = useState<label | null>(null);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('#000000');
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editColor, setEditColor] = useState('');
  const [displayEditColorPicker, setDisplayEditColorPicker] = useState(false);

  const handleProjectSelect = (projectId: number, repositoryName: string) => {
    setSelectedProjectId(projectId);
    setSelectedProjectName(repositoryName);
  };

  const handleCreateLabel = () => {
    if (!selectedProjectId) return;
    addLabel({
      title,
      description,
      color: color.replace('#', ''),
      projectId: selectedProjectId,
    });
    setTitle('');
    setDescription('');
    setColor('#000000');
  };

  const handleUpdateLabel = () => {
    if (!editLabelData) return;

    const hasChanges =
      editTitle !== editLabelData.name ||
      editDescription !== editLabelData.description ||
      editColor.replace('#', '') !== editLabelData.color;

    if (!hasChanges) return;

    editLabel(editLabelData.labelId, {
      oldTitle: editLabelData.name,
      newTitle: editTitle,
      description: editDescription,
      color: editColor.replace('#', ''),
      organizationName: teamInfo?.organizationName as string,
      repositoryName: selectedProjectName as string,
      projectId: selectedProjectId as number,
    });

    setDisplayEdit(false);
  };

  const handleDeleteLabel = () => {
    if (!editLabelData) return;

    removeLabel(editLabelData.labelId, {
      title: editLabelData.name,
      organizationName: teamInfo?.organizationName as string,
      repositoryName: selectedProjectName as string,
    });

    setDisplayEdit(false);
  };

  return (
    <ModalPortal>
      <S.ModalBackground>
        <S.ModalWrapper>
          <S.ModalHeader>Task Label 관리</S.ModalHeader>

          <S.ModalSectionWrapper>
            <S.ModalSmallText>프로젝트 선택</S.ModalSmallText>
            <Dropdown
              options={projects || []}
              placeholder="프로젝트를 선택하세요."
              onSelect={handleProjectSelect}
              dropdownType="default"
              width="100%"
            />
          </S.ModalSectionWrapper>

          <S.ModalSectionWrapper>
            <S.ModalSmallText>프로젝트 라벨목록</S.ModalSmallText>
            <S.ModalTaskIssueWrapper>
              {labels.map((label) => (
                <TaskLabel
                  key={label.labelId}
                  labelInfo={label}
                  isClickable
                  onClick={() => {
                    setEditLabelData(label);
                    setEditTitle(label.name);
                    setEditDescription(label.description);
                    setEditColor(`#${label.color}`);
                    setDisplayEdit(true);
                  }}
                  type="taskModal"
                />
              ))}
            </S.ModalTaskIssueWrapper>
          </S.ModalSectionWrapper>

          {displayEdit && (
            <S.ModalEditWrapper>
              <S.ModalSmallText>라벨 수정/삭제하기</S.ModalSmallText>
              <S.ModalEditText>색상 선택</S.ModalEditText>
              <S.ColorPreview
                color={editColor}
                onClick={() =>
                  setDisplayEditColorPicker(!displayEditColorPicker)
                }
              />
              {displayEditColorPicker && (
                <S.Popover>
                  <S.Cover onClick={() => setDisplayEditColorPicker(false)} />
                  <SketchPicker
                    color={editColor}
                    onChange={(c: ColorResult) => setEditColor(c.hex)}
                  />
                </S.Popover>
              )}
              <S.ModalSmallText>라벨 이름</S.ModalSmallText>
              <Input
                width="100%"
                placeholder="라벨 이름을 입력해주세요"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <S.ModalSmallText>라벨 설명</S.ModalSmallText>
              <TextArea
                placeholder="라벨 설명을 입력해주세요"
                width="100%"
                height="98px"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />
              <S.ModalButtonWrapper>
                <Button
                  buttonType="tertiary"
                  width="120px"
                  onClick={handleDeleteLabel}
                >
                  삭제하기
                </Button>
                <Button
                  buttonType="secondary"
                  width="120px"
                  onClick={handleUpdateLabel}
                >
                  수정하기
                </Button>
              </S.ModalButtonWrapper>
            </S.ModalEditWrapper>
          )}

          <S.ModalEditWrapper>
            <S.ModalSmallText>라벨 추가하기</S.ModalSmallText>
            <S.ModalEditText>색상 선택</S.ModalEditText>
            <S.ColorPreview
              color={color}
              onClick={() => setDisplayColorPicker(!displayColorPicker)}
            />
            {displayColorPicker && (
              <S.Popover>
                <S.Cover onClick={() => setDisplayColorPicker(false)} />
                <SketchPicker
                  color={color}
                  onChange={(c: ColorResult) => setColor(c.hex)}
                />
              </S.Popover>
            )}
            <S.ModalSmallText>라벨 이름</S.ModalSmallText>
            <Input
              width="100%"
              placeholder="라벨 이름을 입력해주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <S.ModalSmallText>라벨 설명</S.ModalSmallText>
            <TextArea
              placeholder="라벨 설명을 입력해주세요"
              width="100%"
              height="98px"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <S.ModalButtonWrapper>
              <Button
                buttonType="secondary"
                width="120px"
                onClick={handleCreateLabel}
              >
                추가하기
              </Button>
            </S.ModalButtonWrapper>
          </S.ModalEditWrapper>

          <S.ModalButtonWrapper>
            <Button buttonType="primary" width="120px" onClick={onClose}>
              확인
            </Button>
          </S.ModalButtonWrapper>
        </S.ModalWrapper>
      </S.ModalBackground>
    </ModalPortal>
  );
};

export default TaskLabelModal;
