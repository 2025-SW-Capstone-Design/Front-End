import React, { useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './TaskCard.styles';
import type { IssueCardProps } from './TaskCard.types';
import AvatarGroup from '../AvatarGroup/AvatarGroup';
import TextIconButton from '../TextIconButton/TextIconButton';
import { ReactComponent as arrow_right_small } from '../../assets/icon/arrow_right_small.svg';
import TaskLabel from '../TaskLabel/TaskLabel';
import { useDrag } from 'react-dnd';

const TaskCard = ({ task, projectId, setMarkdown }: IssueCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { teamId } = useParams();
  const cardRef = useRef<HTMLDivElement>(null);

  // Use drag hook with proper configuration
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'TASK',
      item: () => {
        // Close card details when dragging starts
        setIsOpen(false);
        return task;
      },
      canDrag: true, // Always allow dragging
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const didDrop = monitor.didDrop();
        if (didDrop) {
          console.log('Task dropped successfully:', task.title);
        } else {
          console.log('Task drag cancelled');
        }
      },
    }),
    [task], // Recompute when task changes
  );

  // Set up the drag ref
  React.useEffect(() => {
    if (cardRef.current) {
      drag(cardRef.current);
    }
  }, [drag]);

  const handleCardClick = (e: React.MouseEvent) => {
    if (!isDragging) {
      setIsOpen(!isOpen);
    }
  };

  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMarkdown(task?.content || '');
  };

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
    <S.CardContainer
      onClick={handleCardClick}
      ref={cardRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'grab',
        transform: isDragging ? 'scale(1.02)' : 'scale(1)',
        transition: 'opacity 0.2s, transform 0.2s',
      }}
    >
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
              {task.labels &&
                task.labels.map((label) => (
                  <TaskLabel key={label.labelId} labelInfo={label} />
                ))}
            </S.LabelGroup>
            <TextIconButton
              buttonType="primary"
              icon={arrow_right_small}
              iconPosition="right"
              onClick={handleViewDetails}
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
