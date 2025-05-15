import React, { useState } from 'react';
import * as S from './PortfolioCard.styles';
import type { PortfolioCardProps } from './PortfolioCard.types';
import { formatKoreanDateTime } from '../../utils/formatter/timeFomatter';
import MDEditor from '@uiw/react-md-editor';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { deletePortfolio } from '../../apis/portfolio/portfolio';
import { queryClient } from '../../QueryClient';

const PortfolioCard = ({ data }: PortfolioCardProps) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleCard = () => setIsOpen((prev) => !prev);
  const removePortfolio = () => {
    deletePortfolio(data?.id)
      .execute()
      .then(() => {
        alert('해당 포트폴리오가 삭제되었습니다.');
        queryClient.invalidateQueries({ queryKey: ['portfolios'] });
      })
      .catch((err) => {
        console.error('Occured Error: ', err);
        alert('포트폴리오 삭제 중 오류가 발생하였습니다.');
      });
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          title="포트폴리오를 삭제하시겠습니까?"
          leftButtonText="취소하기"
          rightButtonText="삭제하기"
          onLeftButtonClick={() => setIsModalOpen(!isModalOpen)}
          onRightButtonClick={removePortfolio}
        />
      )}
      <S.PortfolioCardWrapper onClick={toggleCard}>
        <S.PortfolioCardTitle>{data?.title}</S.PortfolioCardTitle>
        <S.PortfolioCardModifyTime>
          {formatKoreanDateTime(data?.modifyTime)}
        </S.PortfolioCardModifyTime>
        {isOpen && (
          <>
            <S.PortfolioCardPreview
              data-color-mode="lightgray"
              onClick={(e) => e.stopPropagation()}
            >
              <MDEditor.Markdown
                style={{
                  height: 'fit-content',
                  overflowY: 'auto',
                  padding: '20px',
                }}
                source={data?.content}
              />
            </S.PortfolioCardPreview>
            <S.PortfolioCardButtonWrapper onClick={(e) => e.stopPropagation()}>
              <Button
                buttonType="secondary"
                width="130px"
                onClick={() => setIsModalOpen(!isModalOpen)}
              >
                삭제하기
              </Button>
              <Button
                buttonType="tertiary"
                width="130px"
                onClick={() => navigate(`/portfolio/edit/${data?.id}`)}
              >
                수정하기
              </Button>
            </S.PortfolioCardButtonWrapper>
          </>
        )}
      </S.PortfolioCardWrapper>
    </>
  );
};

export default PortfolioCard;
