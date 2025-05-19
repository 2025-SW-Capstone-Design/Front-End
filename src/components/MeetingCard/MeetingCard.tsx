import React, { useState } from 'react';
import * as S from './MeetingCard.styles';
import type { MeetingCardProps } from './MeetingCard.types';
import Button from '../Button/Button';
import MeetingLogModal from '../MeetingLogModal/MeetingLogModal';

function MeetingCard({ data, teamId, refetch }: MeetingCardProps) {
  const [isOpenReadModal, setIsOpenReadModal] = useState<boolean>(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);

  return (
    <>
      {(isOpenReadModal || isOpenEditModal) && (
        <MeetingLogModal
          onClose={
            isOpenEditModal
              ? () => setIsOpenEditModal(!isOpenEditModal)
              : () => setIsOpenReadModal(!isOpenReadModal)
          }
          type={isOpenEditModal ? 'Edit' : 'Read'}
          data={data}
          teamId={teamId}
          refetch={refetch}
        />
      )}
      <S.MeetingCardWrapper>
        <S.MeetingCardHeader>
          <S.MeetingTopBar>
            <S.MeetingTime>{data.createdAt}</S.MeetingTime>
          </S.MeetingTopBar>
          <S.MeetingTitle>{data.title}</S.MeetingTitle>
        </S.MeetingCardHeader>
        <Button
          buttonType="primary"
          width="fit-content"
          onClick={() => setIsOpenEditModal(!isOpenEditModal)}
        >
          수정하기
        </Button>
        <Button
          buttonType="tertiary"
          width="fit-content"
          onClick={() => setIsOpenReadModal(!isOpenReadModal)}
        >
          확인하기
        </Button>
      </S.MeetingCardWrapper>
    </>
  );
}

export default MeetingCard;
