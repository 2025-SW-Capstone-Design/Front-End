import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import GenerateReadmeModal from '../../components/GenerateReadmeModal/GenerateReadmeModal';
import * as S from './ReadmeModifyPage.styles';

import BackIcon from '../../assets/icon/backIcon.svg';
import plusIcon from '../../assets/icon/white_plus.svg';

import Menu from '../../components/Markdown/Menu/Menu';
import MarkdownEditor from '../../components/Markdown/Editor/MarkdownEditor';
import IconButton from '../../components/IconButton/IconButton';
import Button from '../../components/Button/Button';
import MDEditor from '@uiw/react-md-editor';

import {
  createReadme,
  getReadmeDetail,
  updateReadme,
} from '../../apis/readme/readme';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';

const ReadmeModifyPage = () => {
  const navigate = useNavigate();
  const { teamId, projectId, readmeId } = useParams();

  const isEditMode = !!readmeId;
  const { data: readme } = useApiQuery(
    getReadmeDetail(Number(teamId), Number(readmeId)),
    ['readme', readmeId],
  );

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (readme) {
      setTitle(readme.title || '');
      setDescription(readme.content || '');
    }
  }, [readme]);

  const handleMarkdownChange = (value?: string) => {
    setDescription(value || '');
  };

  const handleSubmit = () => {
    if (!title || !description) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    const api = isEditMode
      ? updateReadme(Number(teamId), Number(projectId), Number(readmeId))
      : createReadme(Number(teamId), Number(projectId));

    api
      .setData({ title, content: description })
      .execute()
      .then(() => {
        alert('README가 저장되었습니다.');
        navigate(`/team/${teamId}/readme`);
      })
      .catch((err) => {
        console.error('README 저장 오류:', err);
        alert('README 저장 중 오류가 발생하였습니다.');
      });
  };

  return (
    <>
      {isOpenModal && (
        <GenerateReadmeModal
          onClose={() => setIsOpenModal(false)}
          setDescription={setDescription}
        />
      )}

      <S.ReadmeModifyContainer>
        <S.ReadmeModifyCreateWrapper>
          <S.ReadmeModifyCreateHeader>
            <S.ReadmeModifyHeaderBack
              onClick={() => navigate(`/team/${teamId}/readme`)}
            >
              <img src={BackIcon} alt="back" />
              돌아가기
            </S.ReadmeModifyHeaderBack>
            <S.ReadmeModifyHeaderText>
              {isEditMode ? 'Readme 수정하기' : 'Readme 작성하기'}
            </S.ReadmeModifyHeaderText>
            <S.ReadmeModifyHeaderLength>
              {description?.length} 자
            </S.ReadmeModifyHeaderLength>
          </S.ReadmeModifyCreateHeader>

          <S.ReadmeModifyCreateSection>
            <S.ReadmeModifyCreateInput
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Menu
              insertMarkdown={(syntax) =>
                setDescription((prev) => prev + syntax)
              }
            />
            <S.ReadmeModifyMarkdownLength>
              {description?.length} 자
            </S.ReadmeModifyMarkdownLength>
            <MarkdownEditor
              markdown={description}
              handleMarkdownChange={handleMarkdownChange}
            />
          </S.ReadmeModifyCreateSection>

          <S.ReadmeModifyButtonWrapper>
            {!isEditMode && (
              <Button
                buttonType="tertiary"
                width="fit-content"
                onClick={() => setIsOpenModal(true)}
              >
                REAMDE AI 생성
              </Button>
            )}
            <IconButton
              buttonType="primary"
              width="fit-content"
              onClick={handleSubmit}
            >
              <img src={plusIcon} alt="plus" />
              REAMDE 저장
            </IconButton>
          </S.ReadmeModifyButtonWrapper>
        </S.ReadmeModifyCreateWrapper>

        <S.ReadmeModifyPreviewWrapper>
          <S.ReadmeModifyPreview data-color-mode="lightgray">
            <MDEditor.Markdown
              style={{ height: '92vh', overflowY: 'auto' }}
              source={description}
            />
          </S.ReadmeModifyPreview>
        </S.ReadmeModifyPreviewWrapper>
      </S.ReadmeModifyContainer>
    </>
  );
};

export default ReadmeModifyPage;
