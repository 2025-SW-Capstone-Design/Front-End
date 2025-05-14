import React, { useEffect, useState } from 'react';
import * as S from './TaskTemplatePage.styles';
import MDEditor from '@uiw/react-md-editor';

import BackIcon from '../../assets/icon/backIcon.svg';
import plusIcon from '../../assets/icon/white_plus.svg';
import { useNavigate, useParams } from 'react-router-dom';
import Menu from '../../components/Markdown/Menu/Menu';
import MarkdownEditor from '../../components/Markdown/Editor/MarkdownEditor';
import Button from '../../components/Button/Button';
import IconButton from '../../components/IconButton/IconButton';
import ImportTemplateModal from '../../components/ImportTemplateModal/ImportTemplateModal';
import CreateTemplateModal from '../../components/CreateTemplateModal/CreateTemplateModal';
import {
  createTemplate,
  getTemplateDetail,
  getTemplates,
  updateTemplate,
} from '../../apis/template/template';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import type { IssueTemplateResponse } from '../../apis/template/template.types';

const TaskTemplatePage = () => {
  const { teamId, projectId, templateId } = useParams();
  const navigate = useNavigate();

  const { data: templates } = useApiQuery(
    getTemplates(Number(teamId), Number(projectId)),
    ['templates', teamId, projectId],
  );

  const fetchTemplateDetail = () => {
    return getTemplateDetail(Number(teamId), Number(templateId)).execute();
  };

  const [markDown, setMarkDown] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [type, setType] = useState<string>('');

  const [isOpenSaveModal, setIsOpenSaveModal] = useState<boolean>(false);
  const [isOpenTemplateModal, setIsOpenTemplateModal] =
    useState<boolean>(false);

  useEffect(() => {
    if (templateId) {
      const fetchData = async () => {
        try {
          const response = await fetchTemplateDetail();
          const data: IssueTemplateResponse = response.data;

          setTitle(data.title);
          setMarkDown(data.content);
          setDescription(data.description);
          setType(data.type);
        } catch (err) {
          console.error(err);
        }
      };
      fetchData();
    }
  }, [templateId]);

  const insertMarkdown = (syntax: string) => {
    setMarkDown((prev) => prev + syntax);
  };

  const handleMarkdownChange = (value?: string) => {
    setMarkDown(value || '');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleCreateTemplate = () => {
    createTemplate(Number(teamId))
      .setData({
        title,
        content: markDown,
        description,
        type,
        projectId: Number(projectId),
      })
      .execute()
      .then(() => {
        setIsOpenSaveModal(false);
        alert('템플릿이 생성되었습니다.');
        navigate(`/team/${teamId}/calendar`);
      })
      .catch((err) => {
        console.error(err);
        alert(err.response.data.message);
      });
  };

  const handleUpdateTemplate = () => {
    updateTemplate(Number(teamId), Number(templateId))
      .setData({
        title,
        content: markDown,
        description,
        type,
        projectId: Number(projectId),
      })
      .execute()
      .then(() => {
        setIsOpenSaveModal(false);
        alert('템플릿이 수정되었습니다.');
        navigate(`/team/${teamId}/calendar`);
      })
      .catch((err) => {
        console.error(err);
        alert(err.response.data.message);
      });
  };

  return (
    <>
      {isOpenSaveModal && (
        <CreateTemplateModal
          onClose={() => setIsOpenSaveModal(!isOpenSaveModal)}
          description={description}
          type={type}
          setDescription={setDescription}
          setType={setType}
          handleTemplate={
            templateId ? handleUpdateTemplate : handleCreateTemplate
          }
        />
      )}
      {isOpenTemplateModal && (
        <ImportTemplateModal
          onClose={() => setIsOpenTemplateModal(!isOpenTemplateModal)}
          teamId={teamId as string}
          projectId={projectId as string}
          modalType="createAndEdit"
        />
      )}
      <S.TaskTemplateContainer>
        <S.TaskTemplateCreateWrapper>
          <S.TaskTemplateCreateHeader>
            <S.TaskTemplateHeaderBack
              onClick={() => navigate(`/team/${teamId}/calendar/`)}
            >
              <img src={BackIcon} alt="back" />
              돌아가기
            </S.TaskTemplateHeaderBack>
            <S.TaskTemplateHeaderText>
              Task Template 작성하기
            </S.TaskTemplateHeaderText>
            <S.TaskTemplateHeaderLength>
              {markDown.length} 자
            </S.TaskTemplateHeaderLength>
          </S.TaskTemplateCreateHeader>
          <S.TaskTemplateCreateSection>
            <S.TaskTemplateCreateInput
              placeholder="제목을 입력하세요"
              value={title}
              onChange={handleTitleChange}
            />
            <Menu insertMarkdown={insertMarkdown} />
            <S.TaskTemplateMarkdownLength>
              {markDown.length} 자
            </S.TaskTemplateMarkdownLength>
            <MarkdownEditor
              markdown={markDown}
              handleMarkdownChange={handleMarkdownChange}
            />
          </S.TaskTemplateCreateSection>
          <S.TaskTemplateButtonWrapper>
            <Button
              buttonType="secondary"
              width="fit-content"
              onClick={() => setIsOpenTemplateModal(true)}
            >
              기존 템플릿 가져오기
            </Button>
            <IconButton
              buttonType="primary"
              width="fit-content"
              onClick={() => setIsOpenSaveModal(true)}
            >
              <img src={plusIcon} alt="plus" />
              템플릿 저장하기
            </IconButton>
          </S.TaskTemplateButtonWrapper>
        </S.TaskTemplateCreateWrapper>
        <S.TaskTemplatePreviewWrapper>
          <S.TaskTemplatePreview data-color-mode="lightgray">
            <MDEditor.Markdown
              style={{
                height: '92vh',
              }}
              source={markDown}
            />
          </S.TaskTemplatePreview>
        </S.TaskTemplatePreviewWrapper>
      </S.TaskTemplateContainer>
    </>
  );
};

export default TaskTemplatePage;
