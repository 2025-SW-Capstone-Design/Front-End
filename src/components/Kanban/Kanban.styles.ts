import styled from '@emotion/styled';

const KanbanContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 53px;
`;

const KanbanHeaderText = styled.div`
  font-size: 24px;
  font-weight: 700;

  margin-bottom: 32px;
`;

const KanbanListContainer = styled.div`
  display: flex;
  flex-direction: row;

  gap: 24px;
`;

export { KanbanContainer, KanbanListContainer, KanbanHeaderText };
