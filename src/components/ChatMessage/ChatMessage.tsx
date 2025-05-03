import React from 'react';
import * as S from './ChatMessage.styles';
import type { ChatMessageProps } from './ChatMessage.types';

function ChatMessage({
  name,
  message,
  time,
  isSender = false,
}: ChatMessageProps) {
  return (
    <S.MessageWrapper isSender={isSender}>
      <S.MessageHeader isSender={isSender}>
        <S.Name>{name}</S.Name>
        <S.Time>{time}</S.Time>
      </S.MessageHeader>
      <S.MessageContent isSender={isSender}>{message}</S.MessageContent>
    </S.MessageWrapper>
  );
}

export default ChatMessage;
