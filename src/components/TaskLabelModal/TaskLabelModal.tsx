import React, { useEffect, useState } from 'react';
import * as S from './TaskLableModal.styles';
import ModalPortal from '../Modal/ModalPortal';
import Dropdown from '../Dropdown/Dropdown';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import { getProjects } from '../../apis/project/project';
import type { label } from '../../apis/label/label.types';
import {
  createLabel,
  deleteLabel,
  getLabels,
  updateLabel,
} from '../../apis/label/label';
import TaskLabel from '../TaskLabel/TaskLabel';
import { SketchPicker } from 'react-color';
import type { ColorResult } from 'react-color';
import type { TaskLabelModalProps } from './TaskLabelModal.types';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';

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
  const [labelList, setLabelList] = useState<label[]>([]);
  const [editLabel, setEditLabel] = useState<label>();
  const [displayEdit, setDisplayEdit] = useState<boolean>(false);

  const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false);
  const [displayEditColorPicker, setEditDisplayColorPicker] =
    useState<boolean>(false);

  const [color, setColor] = useState<string>('#000000');
  const [editColor, setEditColor] = useState<string>('');

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const [editTitle, setEditTitle] = useState<string>('');
  const [editDescription, setEditDescription] = useState<string>('');

  useEffect(() => {
    const fetchLabels = async () => {
      if (!selectedProjectId) return;
      try {
        const response = await getLabels(
          teamInfo?.id as number,
          selectedProjectId,
        ).execute();
        setLabelList(response.data);
      } catch (error) {
        setLabelList([]);
      }
    };

    fetchLabels();
  }, [selectedProjectId, teamInfo?.id as number]);

  const handleProjectSelect = (projectId: number, repositoryName: string) => {
    setSelectedProjectId(projectId);
    setSelectedProjectName(repositoryName);
  };

  const toggleColorPicker = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleColorChange = (color: ColorResult) => {
    setColor(color.hex);
  };

  const toggleEditColorPicker = () => {
    setEditDisplayColorPicker(!displayColorPicker);
  };

  const handleEditColorChange = (color: ColorResult) => {
    setEditColor(color.hex);
  };

  const handleEditTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };

  const handleEditDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setEditDescription(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDescription(e.target.value);
  };

  const handleCreateLabel = async () => {
    if (!selectedProjectId) return;
    try {
      await createLabel(teamInfo?.id as number)
        .setData({
          title,
          description,
          color: color.replace('#', ''),
          projectId: selectedProjectId,
        })
        .execute();
      setTitle('');
      setDescription('');
      setColor('#000000');
      const response = await getLabels(
        teamInfo?.id as number,
        selectedProjectId,
      ).execute();
      setLabelList(response.data);
    } catch (error) {
      console.error('라벨 생성 실패:', error);
    }
  };

  const handleUpdateLabel = async () => {
    if (!editLabel?.labelId || !selectedProjectId) return;

    const hasChanges =
      editTitle !== editLabel.name ||
      editDescription !== editLabel.description ||
      editColor.replace('#', '') !== editLabel.color;

    if (!hasChanges) {
      console.log('변경된 내용이 없습니다.');
      return;
    }

    try {
      await updateLabel(teamInfo?.id as number, editLabel.labelId)
        .setData({
          oldTitle: editLabel.name,
          newTitle: editTitle,
          description: editDescription,
          color: editColor.replace('#', ''),
          organizationName: teamInfo?.organizationName as string,
          repositoryName: selectedProjectName as string,
          projectId: selectedProjectId,
        })
        .execute();

      setDisplayEdit(false);

      const response = await getLabels(
        teamInfo?.id as number,
        selectedProjectId,
      ).execute();
      setLabelList(response.data);
    } catch (error) {
      console.error('라벨 수정 실패:', error);
    }
  };

  const handleDeleteLabel = async () => {
    if (!editLabel?.labelId || !selectedProjectId) return;
    try {
      await deleteLabel(teamInfo?.id as number, editLabel?.labelId)
        .setData({
          title: editTitle,
          organizationName: teamInfo?.organizationName as string,
          repositoryName: selectedProjectName as string,
        })
        .execute();
      setDisplayEdit(false);
      const response = await getLabels(
        teamInfo?.id as number,
        selectedProjectId,
      ).execute();
      setLabelList(response.data);
    } catch (error) {
      console.error('라벨 삭제 실패:', error);
    }
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
              {labelList?.map((label) => (
                <TaskLabel
                  key={label.labelId}
                  labelInfo={label}
                  isClickable
                  onClick={() => {
                    setEditTitle(label.name);
                    setEditLabel(label);
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
                onClick={toggleEditColorPicker}
              />
              {displayEditColorPicker && (
                <S.Popover>
                  <S.Cover onClick={() => setEditDisplayColorPicker(false)} />
                  <SketchPicker
                    color={editColor}
                    onChange={handleEditColorChange}
                  />
                </S.Popover>
              )}
              <S.ModalSmallText>라벨 이름</S.ModalSmallText>
              <Input
                width="100%"
                placeholder="라벨 이름을 입력해주세요"
                value={editTitle}
                onChange={handleEditTitleChange}
              />
              <S.ModalSmallText>라벨 설명</S.ModalSmallText>
              <TextArea
                placeholder="라벨 설명을 입력해주세요"
                width="100%"
                height="98px"
                value={editDescription}
                onChange={handleEditDescriptionChange}
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
            <S.ColorPreview color={color} onClick={toggleColorPicker} />
            {displayColorPicker && (
              <S.Popover>
                <S.Cover onClick={() => setDisplayColorPicker(false)} />
                <SketchPicker color={color} onChange={handleColorChange} />
              </S.Popover>
            )}
            <S.ModalSmallText>라벨 이름</S.ModalSmallText>
            <Input
              width="100%"
              placeholder="라벨 이름을 입력해주세요"
              value={title}
              onChange={handleTitleChange}
            />
            <S.ModalSmallText>라벨 설명</S.ModalSmallText>
            <TextArea
              placeholder="라벨 설명을 입력해주세요"
              width="100%"
              height="98px"
              value={description}
              onChange={handleDescriptionChange}
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
