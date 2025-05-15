import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './PortfolioModifyPage.styles';

import GeneratePortfolioModal from '../../components/GeneratePortfolioModal/GeneratePortfolioModal';
import BackIcon from '../../assets/icon/backIcon.svg';
import plusIcon from '../../assets/icon/white_plus.svg';

import Menu from '../../components/Markdown/Menu/Menu';
import MarkdownEditor from '../../components/Markdown/Editor/MarkdownEditor';
import IconButton from '../../components/IconButton/IconButton';
import Button from '../../components/Button/Button';
import MDEditor from '@uiw/react-md-editor';

import {
  createPortfolio,
  getPortfolioDetail,
  updatePortfolio,
} from '../../apis/portfolio/portfolio';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';

const PortfolioModifyPage = () => {
  const navigate = useNavigate();
  const { portfolioId } = useParams();

  const isEditMode = !!portfolioId;
  const { data: portfolio } = useApiQuery(
    getPortfolioDetail(Number(portfolioId)),
    ['portfolio', portfolioId],
  );

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (portfolio) {
      setTitle(portfolio.title || '');
      setDescription(portfolio.content || '');
    }
  }, [portfolio]);

  const handleMarkdownChange = (value?: string) => {
    setDescription(value || '');
  };

  const handleSubmit = () => {
    if (!title || !description) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    const api = isEditMode
      ? updatePortfolio(Number(portfolioId))
      : createPortfolio();

    api
      .setData({ title, content: description })
      .execute()
      .then(() => {
        alert('포트폴리오가 저장되었습니다.');
        navigate('/portfolio');
      })
      .catch((err) => {
        console.error('포트폴리오 저장 오류:', err);
        alert('포트폴리오 저장 중 오류가 발생하였습니다.');
      });
  };

  return (
    <>
      {isOpenModal && (
        <GeneratePortfolioModal
          onClose={() => setIsOpenModal(false)}
          setDescription={setDescription}
        />
      )}

      <S.PortfolioModifyContainer>
        <S.PortfolioModifyCreateWrapper>
          <S.PortfolioModifyCreateHeader>
            <S.PortfolioModifyHeaderBack onClick={() => navigate('/portfolio')}>
              <img src={BackIcon} alt="back" />
              돌아가기
            </S.PortfolioModifyHeaderBack>
            <S.PortfolioModifyHeaderText>
              {isEditMode ? 'Portfolio 수정하기' : 'Portfolio 작성하기'}
            </S.PortfolioModifyHeaderText>
            <S.PortfolioModifyHeaderLength>
              {description.length} 자
            </S.PortfolioModifyHeaderLength>
          </S.PortfolioModifyCreateHeader>

          <S.PortfolioModifyCreateSection>
            <S.PortfolioModifyCreateInput
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Menu
              insertMarkdown={(syntax) =>
                setDescription((prev) => prev + syntax)
              }
            />
            <S.PortfolioModifyMarkdownLength>
              {description.length} 자
            </S.PortfolioModifyMarkdownLength>
            <MarkdownEditor
              markdown={description}
              handleMarkdownChange={handleMarkdownChange}
            />
          </S.PortfolioModifyCreateSection>

          <S.PortfolioModifyButtonWrapper>
            {!isEditMode && (
              <Button
                buttonType="tertiary"
                width="fit-content"
                onClick={() => setIsOpenModal(true)}
              >
                포트폴리오 AI 생성
              </Button>
            )}
            <IconButton
              buttonType="primary"
              width="fit-content"
              onClick={handleSubmit}
            >
              <img src={plusIcon} alt="plus" />
              포트폴리오 저장
            </IconButton>
          </S.PortfolioModifyButtonWrapper>
        </S.PortfolioModifyCreateWrapper>

        <S.PortfolioModifyPreviewWrapper>
          <S.PortfolioModifyPreview data-color-mode="lightgray">
            <MDEditor.Markdown
              style={{ height: '92vh', overflowY: 'auto' }}
              source={description}
            />
          </S.PortfolioModifyPreview>
        </S.PortfolioModifyPreviewWrapper>
      </S.PortfolioModifyContainer>
    </>
  );
};

export default PortfolioModifyPage;
