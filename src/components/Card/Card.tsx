import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import * as S from './Card.styles';
import type { CardProps } from './Card.types';
import AvatarGroup from '../AvatarGroup/AvatarGroup';
import TextIconButton from '../TextIconButton/TextIconButton';
import { ReactComponent as arrow_right_small } from '../../assets/icon/arrow_right_small.svg';
import { formatKoreanDateTime } from '../../utils/formatter/timeFomatter';
import { useNavigate, useParams } from 'react-router-dom';

function Card({ cardType, data, projectId }: CardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { teamId } = useParams();
  console.log(projectId);

  const [{ isDragging }, dragRef] = useDrag({
    type: 'MILESTONE',
    item: { ...data },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const setRef = (node: HTMLDivElement | null) => {
    if (node) {
      dragRef(node);
    }
  };

  const selectedStatus = (status: string) => {
    switch (status) {
      case 'NOT_STARTED':
        return '진행전';
      case 'IN_PROGRESS':
        return '진행중';
      case 'DONE':
        return '완료';
    }
  };

  return (
    <S.CardContainer
      onClick={() => setIsOpen(!isOpen)}
      ref={setRef}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <S.CardHeader>
        <S.CardStatus>{selectedStatus(data.status)}</S.CardStatus>
        <S.CardTitle>{data.title}</S.CardTitle>
      </S.CardHeader>
      {isOpen && (
        <>
          <S.CardDescription>{data.description}</S.CardDescription>
          <S.CardFooter>
            <S.MemberAvatars>
              <AvatarGroup
                members={[
                  {
                    name: data.creator,
                  },
                ]}
              />
            </S.MemberAvatars>
            <S.DueDate>
              <S.Date>
                {'시작일: ' + formatKoreanDateTime(data.startDate)}
              </S.Date>
              <S.Date>{'마감일: ' + formatKoreanDateTime(data.dueDate)}</S.Date>
            </S.DueDate>
            <TextIconButton
              buttonType="primary"
              icon={arrow_right_small}
              iconPosition="right"
              onClick={() =>
                navigate(
                  `/team/${teamId}/project/${projectId}/milestone/${data.milestoneId}`,
                )
              }
            >
              Task 보러가기
            </TextIconButton>
          </S.CardFooter>
        </>
      )}
    </S.CardContainer>
  );
}

export default Card;
