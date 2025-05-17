import React, { useState } from 'react';
import * as S from './MeetingPage.styles';

import BackIcon from '../../assets/icon/backIcon.svg';
import plusIcon from '../../assets/icon/white_plus.svg';
import { useNavigate, useParams } from 'react-router-dom';
import IconButton from '../../components/IconButton/IconButton';
import CreateMeetingModal from '../../components/CreateMeetingModal/CreateMeetingModal';

const MeetingPage = () => {
  const { teamId } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      {isModalOpen && (
        <CreateMeetingModal
          onClose={() => setIsModalOpen(!isModalOpen)}
          teamId={teamId as string}
        />
      )}
      <S.MeetingPageContainer>
        <S.MeetingPageHeader>
          <S.MeetingPageHeaderBack onClick={() => navigate(`/team/${teamId}`)}>
            <img src={BackIcon} alt="back" />
            뒤로가기
          </S.MeetingPageHeaderBack>
          <S.MeetingPageHeaderText>Meeting</S.MeetingPageHeaderText>
          <S.MeetingPageHeaderButtonWrapper>
            <IconButton
              buttonType="tertiary"
              width="174px"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              <img src={plusIcon} alt="plus" />
              회의 시작하기
            </IconButton>
          </S.MeetingPageHeaderButtonWrapper>
        </S.MeetingPageHeader>
      </S.MeetingPageContainer>
    </>
  );
};

export default MeetingPage;
