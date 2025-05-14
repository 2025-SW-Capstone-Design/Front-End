import styled from '@emotion/styled';

const KanbanContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const KanbanHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  gap: 12px;
  padding: 50px 0 30px 0;
`;

const KanbanHeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const KanbanHeaderText = styled.div`
  font-size: 24px;
  font-weight: 700;

  margin-right: auto;

  display: flex;
  align-items: center;
  height: 100%;
`;

const KanbanListContainer = styled.div`
  display: flex;
  flex-direction: row;

  gap: 24px;
`;

export {
  KanbanContainer,
  KanbanListContainer,
  KanbanHeader,
  KanbanHeaderText,
  KanbanHeaderRight,
};
