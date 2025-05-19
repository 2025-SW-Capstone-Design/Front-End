import React, { useState } from 'react';
import * as S from './MeetingLogPage.styles';
import BackIcon from '../../assets/icon/backIcon.svg';
import { useNavigate, useParams } from 'react-router-dom';
import IconInput from '../../components/IconInput/IconInput';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import { getMeetingLogList } from '../../apis/meetingLog/meetingLog';
import MeetingCard from '../../components/MeetingCard/MeetingCard';

const MeetingLogPage = () => {
  const { teamId } = useParams();
  const navigate = useNavigate();

  const { data: meetingLogList, refetch: refetchMeetingLogList } = useApiQuery(
    getMeetingLogList(Number(teamId)),
    ['meetingLogList', teamId],
  );
  const [keyword, setKeyword] = useState<string>('');

  const filteredMeetingLogList = meetingLogList?.filter((meetingLog) =>
    meetingLog.title.toLowerCase().includes(keyword.toLowerCase()),
  );

  return (
    <>
      <S.MeetingLogContainer>
        <S.MeetingLogHeader>
          <S.MeetingLogHeaderBack onClick={() => navigate(`/team/${teamId}`)}>
            <img src={BackIcon} alt="back" />
            뒤로가기
          </S.MeetingLogHeaderBack>
          <S.MeetingLogHeaderName>회의록</S.MeetingLogHeaderName>
        </S.MeetingLogHeader>
        <S.MeetingLogContentWrapper>
          <S.MeetingLogHeaderButtonWrapper>
            <S.MeetingLogContentTopText>
              총 <span>{filteredMeetingLogList?.length || 0}개</span>의 회의
              기록을 발견했어요!
            </S.MeetingLogContentTopText>
            <IconInput
              placeholder="회의록 검색"
              width="250px"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </S.MeetingLogHeaderButtonWrapper>
          <S.MeetingLogListWrapper>
            {filteredMeetingLogList?.map((meetingLog) => (
              <MeetingCard
                key={meetingLog.id}
                data={meetingLog}
                teamId={Number(teamId)}
                refetch={refetchMeetingLogList}
              />
            ))}
          </S.MeetingLogListWrapper>
        </S.MeetingLogContentWrapper>
      </S.MeetingLogContainer>
    </>
  );
};

export default MeetingLogPage;
