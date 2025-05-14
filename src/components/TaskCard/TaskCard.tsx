import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './TaskCard.styles';
import type { IssueCardProps } from './TaskCard.types';
import AvatarGroup from '../AvatarGroup/AvatarGroup';
import TextIconButton from '../TextIconButton/TextIconButton';
import { ReactComponent as arrow_right_small } from '../../assets/icon/arrow_right_small.svg';
import TaskLabel from '../TaskLabel/TaskLabel';

const TaskCard = ({ task, projectId, setMarkdown }: IssueCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { teamId } = useParams();

  const selectedStatus = (status: string) => {
    switch (status) {
      case 'OPEN':
        return '열림';
      case 'CLOSED':
        return '닫힘';
      default:
        return status;
    }
  };

  return (
    <S.CardContainer onClick={() => setIsOpen(!isOpen)}>
      <S.CardHeader>
        <S.CardStatus>{selectedStatus(task.status)}</S.CardStatus>
        <S.CardTitle>{task.title}</S.CardTitle>
      </S.CardHeader>
      {isOpen && (
        <>
          <S.CardFooter>
            <S.MemberAvatars>
              <AvatarGroup members={[{ name: task.creator }]} />
            </S.MemberAvatars>
            <S.LabelGroup>
              {task.labels.map((label) => (
                <TaskLabel key={label.labelId} labelInfo={label} />
              ))}
            </S.LabelGroup>
            <TextIconButton
              buttonType="primary"
              icon={arrow_right_small}
              iconPosition="right"
              onClick={(e) => {
                e.stopPropagation();
                setMarkdown(task?.content);
              }}
            >
              상세보기
            </TextIconButton>
          </S.CardFooter>
        </>
      )}
    </S.CardContainer>
  );
};

export default TaskCard;
