import styled from '@emotion/styled';
import { css } from '@emotion/react';

const ChatMessageLayout = css`
  width: 290px;
  height: auto;
  flex-shrink: 0;
  padding: 12px;
  border-radius: 8px;
`;

const MessageWrapper = styled.div<{ isSender: boolean }>`
  ${ChatMessageLayout};

  background-color: ${({ isSender, theme }) =>
    isSender ? theme.colors.primary[40] : theme.colors.gray[10]};
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MessageHeader = styled.div<{ isSender: boolean }>`
  width: 100%;
  height: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${({ isSender, theme }) =>
    isSender ? 'white' : theme.colors.primary[40]};
  ${({ theme }) => theme.text.labelM_medium};
`;

const Name = styled.div`
  width: auto;
  height: 15px;
`;

const Time = styled.div`
  width: auto;
  height: 15px;
`;

const MessageContent = styled.div<{ isSender: boolean }>`
  width: 100%;
  height: auto;
  color: ${({ isSender }) => (isSender ? 'white' : 'black')};
  ${({ theme }) => theme.text.labelL_medium};
`;

export { MessageWrapper, MessageHeader, Name, Time, MessageContent };
