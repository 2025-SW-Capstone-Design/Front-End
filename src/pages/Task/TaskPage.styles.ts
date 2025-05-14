import styled from '@emotion/styled';

const TaskContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100%;
`;

const TaskCreateWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  height: 100%;

  padding: 0 48px;
`;

const TaskPreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;

  padding: 30px;
`;

const TaskCreateHeader = styled.div`
  display: flex;
  flex-direction: column;

  padding: 60px 0px 36px 0px;
  flex-shrink: 0;

  gap: 14px;
`;

const TaskHeaderBack = styled.div`
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

const TaskHeaderText = styled.div`
  font-size: 32px;
  font-weight: 800;
`;

const TaskHeaderLength = styled.div`
  font-size: 32px;
  font-weight: 600;
`;

const TaskCreateSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TaskIssueListWrapper = styled.div`
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

const TaskCreateInput = styled.input`
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme.colors.gray[70]};

  border: none;
  padding: 12px 0px;
`;

const TaskMarkdownLength = styled.div`
  color: ${(props) => props.theme.colors.primary[30]};

  font-size: 18px;
  font-weight: 700;

  padding: 12px 0;
`;

const TaskPreview = styled.div`
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #aeb6bd;
`;

const TaskButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px 0;

  justify-content: flex-end;
  align-items: center;
  gap: 12px;
`;

export {
  TaskContainer,
  TaskCreateHeader,
  TaskCreateWrapper,
  TaskHeaderBack,
  TaskHeaderText,
  TaskPreviewWrapper,
  TaskCreateInput,
  TaskCreateSection,
  TaskHeaderLength,
  TaskMarkdownLength,
  TaskPreview,
  TaskButtonWrapper,
  TaskIssueListWrapper,
};
