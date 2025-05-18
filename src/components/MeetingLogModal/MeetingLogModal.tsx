import React, { useEffect, useState } from 'react';
import * as S from './MeetingLogModal.styles';
import type { MeetingLogModalProps } from './MeetingLogModal.types';
import ModalPortal from '../Modal/ModalPortal';
import MDEditor from '@uiw/react-md-editor';
import MarkdownEditor from '../../components/Markdown/Editor/MarkdownEditor';
import { updateMeetingLog } from '../../apis/meetingLog/meetingLog';
import Menu from '../Markdown/Menu/Menu';
import Button from '../Button/Button';
import { queryClient } from '../../QueryClient';

const MeetingLogModal = ({
  onClose,
  type,
  data,
  teamId,
  refetch,
}: MeetingLogModalProps) => {
  const [title, setTitle] = useState<string>('');
  const [markdown, setMarkDown] = useState<string>('');

  useEffect(() => {
    if (type === 'Edit' && data) {
      setTitle(data.title);
      setMarkDown(data.content);
    }
  }, [type, data]);

  const handleMarkdownChange = (value?: string) => {
    setMarkDown(value || '');
  };

  const handleUpdateMeetingLog = () => {
    updateMeetingLog(teamId, data.id)
      .setData({
        title,
        content: markdown,
      })
      .execute()
      .then(() => {
        alert('회의록이 수정되었습니다.');
        queryClient.invalidateQueries({
          queryKey: ['meetingLogList', teamId],
        });
        refetch();
        onClose();
      })
      .catch((err) => {
        console.error(err);
        alert('회의록 수정에 실패하였습니다.');
      });
  };

  return (
    <>
      <ModalPortal>
        <S.ModalBackground onClick={onClose}>
          <S.ModalWrapper onClick={(e) => e.stopPropagation()}>
            <S.ModalHeader>
              <S.ModalTitle>
                {type === 'Edit' ? '회의록 수정' : '회의록 조회'}
              </S.ModalTitle>
              <S.ModalSubTitle>
                {type === 'Edit'
                  ? '회의록을 수정 해보세요'
                  : '회의록를 조회 해보세요'}
              </S.ModalSubTitle>
            </S.ModalHeader>
            <S.ModalContent>
              {type === 'Edit' ? (
                <>
                  <S.MeetingLogTitleInput
                    placeholder="회의록 제목을 입력하세요."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Menu
                    insertMarkdown={(syntax) =>
                      setMarkDown((prev) => prev + syntax)
                    }
                  />
                  <MarkdownEditor
                    markdown={markdown}
                    handleMarkdownChange={handleMarkdownChange}
                  />
                  <S.ModalButtonWrapper>
                    <Button
                      buttonType="secondary"
                      onClick={onClose}
                      width="120px"
                    >
                      취소하기
                    </Button>
                    <Button
                      buttonType="tertiary"
                      onClick={handleUpdateMeetingLog}
                      width="120px"
                    >
                      수정하기
                    </Button>
                  </S.ModalButtonWrapper>
                </>
              ) : (
                <S.ModalPreviewer data-color-mode="lightgray">
                  <MDEditor.Markdown
                    style={{
                      height: '100%',
                      padding: '24px',
                      lineHeight: '1.6',
                      overflowY: 'auto',
                    }}
                    source={data.content}
                  />
                </S.ModalPreviewer>
              )}
            </S.ModalContent>
          </S.ModalWrapper>
        </S.ModalBackground>
      </ModalPortal>
    </>
  );
};

export default MeetingLogModal;
