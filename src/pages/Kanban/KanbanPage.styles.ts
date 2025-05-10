import styled from '@emotion/styled';

const KanbanContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
`;

const KanbanHeader = styled.div`
  display: flex;
  flex-direction: column;

  padding: 72px 48px 36px 48px;
  flex-shrink: 0;
`;

const KanbanHeaderBack = styled.div`
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

const KanbanHeaderTeamName = styled.div`
  font-size: 32px;
  font-weight: 800;
`;

const KanbanHeaderButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;

  height: 52px;
  gap: 24px;

  align-items: center;
  align-self: stretch;
`;

export {
  KanbanContainer,
  KanbanHeader,
  KanbanHeaderBack,
  KanbanHeaderButtonWrapper,
  KanbanHeaderTeamName,
};
