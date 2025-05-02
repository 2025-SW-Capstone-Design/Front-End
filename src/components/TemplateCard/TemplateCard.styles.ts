import styled from '@emotion/styled';

const TemplateCardWrapper = styled.div`
  width: 296px;
  height: 210px;
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.08);
  background-color: white;
  outline: 1px solid ${({ theme }) => theme.colors.gray[40]};
  outline-offset: -1px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[20]};
  }
`;

const TemplateCardTitle = styled.div`
  width: 100%;
  height: 20px;
  color: black;
  ${({ theme }) => theme.text.bodyM_bold};
`;

const TemplateCardContent = styled.div`
  width: 248px;
  height: auto;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;

const TemplateCardContentText = styled.div`
  width: 100%;
  height: 12px;
  ${({ theme }) => theme.text.labeS_bold};
`;

const TemplateCardLabels = styled.div`
  height: 64px;
  padding: 2px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px 4px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 44px;
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export {
  TemplateCardWrapper,
  TemplateCardTitle,
  TemplateCardContent,
  TemplateCardContentText,
  TemplateCardLabels,
  ButtonContainer,
};
