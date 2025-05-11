import React from 'react';
import * as S from './MarkdownEditor.styles';
import MDEditor from '@uiw/react-md-editor';
import type { MarkdownEditorProps } from './MarkdownEditor.types';

const MarkdownEditor = ({
  markdown,
  handleMarkdownChange,
}: MarkdownEditorProps) => {
  return (
    <S.MarkdownEditorContainer>
      <MDEditor
        style={{
          backgroundColor: '#f9f9f9',
          color: '#000000',
        }}
        height="776px"
        value={markdown}
        onChange={handleMarkdownChange}
        preview="edit"
        hideToolbar
      />
    </S.MarkdownEditorContainer>
  );
};

export default MarkdownEditor;
