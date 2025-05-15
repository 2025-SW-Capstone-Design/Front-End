import styled from '@emotion/styled';

const ReadmeCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 28px 24px;

  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.colors.gray[40]};
  background: var(--White, #fff);

  gap: 8px;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.gray[10] || '#f9f9f9'};
  }
`;

const ReadmeCardTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const ReadmeCardModifyTime = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const ReadmeCardPreview = styled.div`
  margin-top: 16px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.gray[10] || '#f9f9f9'};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.gray[30] || '#e0e0e0'};
  max-height: 60vh;
  overflow-y: auto;
  transition: all 0.3s ease;
`;

const ReadmeCardButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;

  gap: 12px;
  margin-top: 12px;
  margin-left: auto;
`;

export {
  ReadmeCardWrapper,
  ReadmeCardTitle,
  ReadmeCardModifyTime,
  ReadmeCardPreview,
  ReadmeCardButtonWrapper,
};
