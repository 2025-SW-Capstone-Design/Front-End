import React, { useState, useEffect } from 'react';
import * as S from './MilestoneListModal.styles';
import ModalPortal from '../Modal/ModalPortal';
import IconButton from '../IconButton/IconButton';
import Input from '../Input/Input';
import pen from '../../assets/icon/pen.svg';
import MilestoneCard from '../MilestoneCard/MilestoneCard';
import Modal from '../Modal/Modal';
import type { MilestoneListModalProps } from './MilestoneListModal.types';
import type { MilestoneResponse } from '~/apis/milestone/milestone.types';
import { queryClient } from '../../QueryClient';

function MilestoneListModal({
  isOpenEditModal,
  onClose,
  isSelected,
  setIsSelected,
  teamId,
  selectedProjectId,
}: MilestoneListModalProps) {
  const cachedMilestones = queryClient.getQueryData<MilestoneResponse[]>([
    'milestones',
    teamId,
    selectedProjectId,
  ]);

  const [search, setSearch] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    setIsSelected(null);
  }, []);

  const filteredTemplates = (cachedMilestones ?? []).filter((milestone) =>
    milestone.title.toLowerCase().includes(search.toLowerCase()),
  );

  const handleTemplateSelect = (milestone: MilestoneResponse) => {
    setIsSelected((prev) =>
      prev?.milestoneId === milestone.milestoneId ? null : milestone,
    );
  };

  const handleModalClose = () => {
    setIsEditMode(false);
    onClose();
  };

  return (
    <ModalPortal>
      <S.ModalBackground onClick={onClose}>
        <S.ModalWrapper onClick={(e) => e.stopPropagation()}>
          <S.ModalHeader>
            <S.ModalTitle>마일스톤 목록</S.ModalTitle>
            {selectedProjectId !== null && (
              <S.ModalButtonContainer>
                <IconButton
                  buttonType="secondary"
                  width="136px"
                  onClick={() => setIsEditMode(true)}
                  disabled={!isSelected}
                >
                  <img src={pen} alt="Edit" />
                  수정 하기
                </IconButton>
              </S.ModalButtonContainer>
            )}
          </S.ModalHeader>
          <S.ModalDescription>
            기존 마일스톤을 열람하고 수정할 수 있습니다
          </S.ModalDescription>
          <Input
            width="100%"
            placeholder="마일스톤 이름을 입력하세요."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <S.MilestoneCardContainer>
            {filteredTemplates.map((milestone) => (
              <MilestoneCard
                key={milestone.milestoneId}
                milestone={milestone}
                isSelected={isSelected?.milestoneId === milestone.milestoneId}
                onSelect={() => handleTemplateSelect(milestone)}
                selectedId={isSelected?.milestoneId ?? null}
                isSelectedProjectId={selectedProjectId === null ? true : false}
              />
            ))}
          </S.MilestoneCardContainer>
        </S.ModalWrapper>
      </S.ModalBackground>
      {isEditMode && (
        <Modal
          title="마일스톤을 수정하시겠습니까?"
          leftButtonText="아니요"
          rightButtonText="수정"
          onLeftButtonClick={handleModalClose}
          onRightButtonClick={() => {
            setIsEditMode(false);
            isOpenEditModal();
            onClose();
          }}
        />
      )}
    </ModalPortal>
  );
}

export default MilestoneListModal;
