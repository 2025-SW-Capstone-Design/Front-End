import styled from '@emotion/styled';

const KanbanListContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 33%;
  height: 70vh;

  padding: 24px;

  border-radius: var(--Corner-Medium, 12px);
  border: 2px solid ${(props) => props.theme.colors.gray[40]};
`;

const KanbanHeaderText = styled.div`
  display: flex;
  flex-direction: row;

  font-size: 24px;
  font-weight: 700;

  margin-bottom: 32px;

  gap: 8px;

  span {
    color: ${(props) => props.theme.colors.system_blue[20]};
  }
`;

const KanbanListItem = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;

  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export { KanbanListContainer, KanbanHeaderText, KanbanListItem };
