import React, { useState, useEffect } from 'react';
import ModalPortal from '../Modal/ModalPortal';
import * as S from './MilestoneModal.styles';
import type { MilestoneModalProps } from './MilestoneModal.types';
import Dropdown from '../Dropdown/Dropdown';
import TextArea from '../TextArea/TextArea';
import Input from '../Input/Input';
import Button from '../Button/Button';
import {
  createMilestone,
  updateMilestone,
  getMilestoneByProject,
  getMilesotnes,
} from '../../apis/milestone/milestone';
import { queryClient } from '../../QueryClient';

const MilestoneModal = ({
  onClose,
  projects,
  teamId,
  projectId,
  milestone,
}: MilestoneModalProps) => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null,
  );
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (projectId) {
      setSelectedProjectId(projectId);
    }
  }, [projectId]);

  useEffect(() => {
    if (milestone) {
      setTitle(milestone.title);
      setDescription(milestone.description);
      setStartDate(milestone.startDate);
      setDueDate(milestone.dueDate);
    }
  }, [milestone]);

  const handleProjectSelect = (selectedProjectId: number) => {
    setSelectedProjectId(selectedProjectId);
  };

  const getNowISOString = () => {
    const now = new Date();
    now.setSeconds(0, 0);
    return now.toISOString().slice(0, 16);
  };

  const getTomorrowISOString = () => {
    const now = new Date();
    now.setDate(now.getDate() + 1);
    now.setSeconds(0, 0);
    return now.toISOString().slice(0, 16);
  };

  const refreshData = async (projectId: number) => {
    try {
      const projectResponse = await getMilestoneByProject(
        teamId,
        projectId,
      ).execute();
      queryClient.setQueryData(
        ['milestones', teamId, projectId],
        projectResponse.data,
      );

      const allResponse = await getMilesotnes(teamId).execute();
      queryClient.setQueryData(['milestones', teamId, null], allResponse.data);
    } catch (error) {
      console.error('마일스톤 데이터 새로고침 실패:', error);
    }
  };

  const handleAddMilestone = async () => {
    if (!selectedProjectId || !title || !startDate || !dueDate) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    if (isSubmitting) return;
    setIsSubmitting(true);

    const isoStartDate = new Date(startDate).toISOString();
    const isoDueDate = new Date(dueDate).toISOString();

    try {
      await createMilestone(teamId, selectedProjectId)
        .setData({
          title,
          description,
          startDate: isoStartDate,
          dueDate: isoDueDate,
        })
        .execute();

      await refreshData(selectedProjectId);

      onClose();
    } catch (error) {
      console.error('마일스톤 생성 실패:', error);
      alert('마일스톤 생성에 실패했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUpdateMilestone = async () => {
    if (!milestone) return;

    if (!selectedProjectId || !title || !startDate || !dueDate) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    if (isSubmitting) return;
    setIsSubmitting(true);

    const isoStartDate = new Date(startDate).toISOString();
    const isoDueDate = new Date(dueDate).toISOString();

    try {
      await updateMilestone(teamId, selectedProjectId, milestone.milestoneId)
        .setData({
          title,
          description,
          startDate: isoStartDate,
          dueDate: isoDueDate,
        })
        .execute();

      await refreshData(selectedProjectId);

      onClose();
    } catch (error) {
      console.error('마일스톤 수정 실패:', error);
      alert('마일스톤 수정에 실패했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ModalPortal>
      <S.ModalBackground>
        <S.ModalWrapper>
          <S.ModalHeader>
            {milestone ? 'Milestone 수정' : 'Milestone 생성'}
          </S.ModalHeader>

          <S.ModalSectionWrapper>
            <S.ModalSmallText>프로젝트 선택</S.ModalSmallText>
            <Dropdown
              options={projects || []}
              placeholder="프로젝트를 선택하세요."
              onSelect={handleProjectSelect}
              value={selectedProjectId as number}
              dropdownType="default"
              width="100%"
            />
          </S.ModalSectionWrapper>

          <S.ModalSectionWrapper>
            <S.ModalSmallText>마일스톤 제목</S.ModalSmallText>
            <Input
              width="100%"
              placeholder="마일스톤 이름을 입력해주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={isSubmitting}
            />
          </S.ModalSectionWrapper>

          <S.ModalSectionWrapper>
            <S.ModalSmallText>마일스톤 시작일</S.ModalSmallText>
            <Input
              width="50%"
              placeholder="마일스톤 시작일"
              type="datetime-local"
              min={getNowISOString()}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              disabled={isSubmitting}
            />
          </S.ModalSectionWrapper>

          <S.ModalSectionWrapper>
            <S.ModalSmallText>마일스톤 마감일</S.ModalSmallText>
            <Input
              width="50%"
              placeholder="마일스톤 종료일"
              type="datetime-local"
              min={getTomorrowISOString()}
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              disabled={isSubmitting}
            />
          </S.ModalSectionWrapper>

          <S.ModalSectionWrapper>
            <S.ModalSmallText>마일스톤 설명</S.ModalSmallText>
            <TextArea
              placeholder="마일스톤 설명을 입력해주세요"
              width="100%"
              height="98px"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={isSubmitting}
            />
          </S.ModalSectionWrapper>

          <S.ModalButtonWrapper>
            <Button
              buttonType="tertiary"
              width="120px"
              onClick={onClose}
              disabled={isSubmitting}
            >
              취소
            </Button>
            <Button
              buttonType="secondary"
              width="120px"
              onClick={milestone ? handleUpdateMilestone : handleAddMilestone}
              disabled={isSubmitting}
            >
              {isSubmitting
                ? '처리 중...'
                : milestone
                  ? '수정하기'
                  : '생성하기'}
            </Button>
          </S.ModalButtonWrapper>
        </S.ModalWrapper>
      </S.ModalBackground>
    </ModalPortal>
  );
};

export default MilestoneModal;
