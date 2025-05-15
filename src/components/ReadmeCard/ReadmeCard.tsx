import React, { useState } from 'react';
import * as S from './ReadmeCard.styles';
import type { ReadmeCardProps } from './ReadmeCard.types';
import MDEditor from '@uiw/react-md-editor';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { deleteReadme, getReadmeDetail } from '../../apis/readme/readme';
import { queryClient } from '../../QueryClient';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';

const ReadmeCard = ({ readmeId, teamId, projectId }: ReadmeCardProps) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState<boolean>(false);

  const { data: readme } = useApiQuery(getReadmeDetail(teamId, readmeId), [
    'readme',
    teamId,
    readmeId,
  ]);

  const toggleCard = () => setIsOpen((prev) => !prev);
  const removeReadme = () => {
    deleteReadme(teamId, readmeId)
      .execute()
      .then(() => {
        setIsRemoveModalOpen(!isRemoveModalOpen);
        alert('해당 리드미가 삭제되었습니다.');
        queryClient.invalidateQueries({ queryKey: ['readmes'] });
      })
      .catch((err) => {
        console.error('Occured Error: ', err);
        setIsRemoveModalOpen(!isRemoveModalOpen);
        alert('리드미 삭제 중 오류가 발생하였습니다.');
      });
  };

  return (
    <>
      {isRemoveModalOpen && (
        <Modal
          title="리드미를 삭제하시겠습니까?"
          leftButtonText="취소하기"
          rightButtonText="삭제하기"
          onLeftButtonClick={() => setIsRemoveModalOpen(!isRemoveModalOpen)}
          onRightButtonClick={removeReadme}
        />
      )}
      <S.ReadmeCardWrapper onClick={toggleCard}>
        <S.ReadmeCardTitle>{readme?.title}</S.ReadmeCardTitle>
        {isOpen && (
          <>
            <S.ReadmeCardPreview
              data-color-mode="lightgray"
              onClick={(e) => e.stopPropagation()}
            >
              <MDEditor.Markdown
                style={{
                  height: 'fit-content',
                  overflowY: 'auto',
                  padding: '20px',
                }}
                source={readme?.content}
              />
            </S.ReadmeCardPreview>
            <S.ReadmeCardButtonWrapper onClick={(e) => e.stopPropagation()}>
              <Button
                buttonType="secondary"
                width="130px"
                onClick={() => setIsRemoveModalOpen(!isRemoveModalOpen)}
              >
                삭제하기
              </Button>
              <Button
                buttonType="tertiary"
                width="130px"
                onClick={() =>
                  navigate(
                    `/team/${teamId}/project/${projectId}/readme/edit/${readmeId}`,
                  )
                }
              >
                수정하기
              </Button>
            </S.ReadmeCardButtonWrapper>
          </>
        )}
      </S.ReadmeCardWrapper>
    </>
  );
};

export default ReadmeCard;
