import styled from '@emotion/styled';

const UpcomingTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 508px;
  height: 543px;
`;

const UpcomingTaskHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 27px;
  ${({ theme }) => theme.text.bodyXL_bold};

  margin-bottom: 32px;
`;

const UpcomingTaskContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export { UpcomingTaskContainer, UpcomingTaskHeader, UpcomingTaskContent };
