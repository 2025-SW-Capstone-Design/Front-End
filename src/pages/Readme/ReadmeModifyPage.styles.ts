import styled from '@emotion/styled';

const ReadmeModifyContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100%;
`;

const ReadmeModifyCreateWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  height: 100%;

  padding: 0 48px;
`;

const ReadmeModifyPreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;

  padding: 30px;
`;

const ReadmeModifyCreateHeader = styled.div`
  display: flex;
  flex-direction: column;

  padding: 60px 0px 36px 0px;
  flex-shrink: 0;

  gap: 14px;
`;

const ReadmeModifyHeaderBack = styled.div`
  display: flex;
  flex-direction: row;

  gap: 4px;
  margin-bottom: 14px;
  align-items: center;

  color: ${(props) => props.theme.colors.gray[70]};
  font-size: 18px;
  font-weight: 700;

  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
    aspect-ratio: 1/1;
  }
`;

const ReadmeModifyHeaderText = styled.div`
  font-size: 32px;
  font-weight: 800;
`;

const ReadmeModifyHeaderLength = styled.div`
  font-size: 32px;
  font-weight: 600;
`;

const ReadmeModifyCreateSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ReadmeModifyIssueListWrapper = styled.div`
  width: 100%;
  padding: 12px 0px;

  display: flex;
  flex-direction: row;

  gap: 8px;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
`;

const ReadmeModifyCreateInput = styled.input`
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme.colors.gray[70]};

  border: none;
  padding: 12px 0px;
`;

const ReadmeModifyMarkdownLength = styled.div`
  color: ${(props) => props.theme.colors.primary[30]};

  font-size: 18px;
  font-weight: 700;

  padding: 12px 0;
`;

const ReadmeModifyPreview = styled.div`
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #aeb6bd;
`;

const ReadmeModifyButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px 0;

  justify-content: flex-end;
  align-items: center;
  gap: 12px;
`;

export {
  ReadmeModifyContainer,
  ReadmeModifyCreateHeader,
  ReadmeModifyCreateWrapper,
  ReadmeModifyHeaderBack,
  ReadmeModifyHeaderText,
  ReadmeModifyPreviewWrapper,
  ReadmeModifyCreateInput,
  ReadmeModifyCreateSection,
  ReadmeModifyHeaderLength,
  ReadmeModifyMarkdownLength,
  ReadmeModifyPreview,
  ReadmeModifyButtonWrapper,
  ReadmeModifyIssueListWrapper,
};

export {};
