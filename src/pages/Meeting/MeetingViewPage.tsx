import type {
  LocalVideoTrack,
  RemoteParticipant,
  RemoteTrack,
  RemoteTrackPublication,
  RemoteVideoTrack,
} from 'livekit-client';
import { RoomEvent, Room } from 'livekit-client';
import * as S from './MeetingViewPage.styles';
import backIcon from '../../assets/icon/backIcon.svg';
import { useCallback, useEffect, useState } from 'react';
import VideoComponent from './components/VideoComponent';
import AudioComponent from './components/AudioComponent';
import { useNavigate, useParams } from 'react-router-dom';
import {
  getChatRoomMember,
  getChatRooms,
  issuedToken,
} from '../../apis/meeting/meeting';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import { getMemberDetail } from '../../apis/member/member';
import MemberIcon from '../../assets/icon/avatar.svg';
import Label from '../../components/Label/Label';
import type { PositionType } from '../../components/Label/Label.types';
import { getMilesotnes } from '../../apis/milestone/milestone';
import * as C from '../../components/Card/Card.styles';
import AvatarGroup from '../../components/AvatarGroup/AvatarGroup';
import { formatKoreanDateTime } from '../../utils/formatter/timeFomatter';

// 타입 정의
type TrackInfo = {
  trackPublication: RemoteTrackPublication;
  participantIdentity: string;
};

const MeetingViewPage = () => {
  const navigate = useNavigate();
  const { teamId, roomName } = useParams();
  const [openMilestoneId, setOpenMilestoneId] = useState<number | null>(null);
  const [chatRoomId, setChatRoomId] = useState<number>();
  const [room, setRoom] = useState<Room | undefined>(undefined);
  const [localTrack, setLocalTrack] = useState<LocalVideoTrack | undefined>(
    undefined,
  );
  const [remoteTracks, setRemoteTracks] = useState<TrackInfo[]>([]);
  const [selectedTrack, setSelectedTrack] = useState<{
    track: LocalVideoTrack | RemoteVideoTrack;
    participantIdentity: string;
  } | null>(null);
  const [mediaState, setMediaState] = useState({
    isMicOn: true,
    isCameraOn: true,
    isScreenSharing: false,
  });

  const { data: chatRooms } = useApiQuery(getChatRooms(Number(teamId)), [
    'chatRooms',
    teamId,
  ]);
  const { data: milestones } = useApiQuery(getMilesotnes(Number(teamId)), [
    'milestones',
    teamId,
  ]);
  const { data: chatRoomMembers } = useApiQuery(
    getChatRoomMember(Number(teamId), chatRoomId as number),
    ['chatRoomMembers', teamId, chatRoomId],
  );
  const { data: member } = useApiQuery(getMemberDetail(), ['member']);

  useEffect(() => {
    if (chatRooms && roomName) {
      const matchedRoom = chatRooms.find((room) => room.title === roomName);

      if (matchedRoom) {
        setChatRoomId(matchedRoom.id);
      }
    }
  }, [chatRooms, roomName]);

  const handleTrackSubscribed = useCallback(
    (
      track: RemoteTrack,
      publication: RemoteTrackPublication,
      participant: RemoteParticipant,
    ) => {
      setRemoteTracks((prev) => [
        ...prev,
        {
          trackPublication: publication,
          participantIdentity: participant.identity,
        },
      ]);
    },
    [],
  );

  const handleTrackUnsubscribed = useCallback(
    (_track: RemoteTrack, publication: RemoteTrackPublication) => {
      setRemoteTracks((prev) =>
        prev.filter(
          (track) => track.trackPublication.trackSid !== publication.trackSid,
        ),
      );
    },
    [],
  );

  const connectToRoom = useCallback(
    async (token: string) => {
      const newRoom = new Room();
      setRoom(newRoom);

      newRoom.on(RoomEvent.TrackSubscribed, handleTrackSubscribed);
      newRoom.on(RoomEvent.TrackUnsubscribed, handleTrackUnsubscribed);

      try {
        await newRoom.connect(
          process.env.REACT_APP_LIVEKIT_URL as string,
          token,
        );
        await newRoom.localParticipant.enableCameraAndMicrophone();

        const videoTrack = newRoom.localParticipant.videoTrackPublications
          .values()
          .next().value?.videoTrack;

        if (videoTrack) {
          setLocalTrack(videoTrack);
          setSelectedTrack({
            track: videoTrack,
            participantIdentity: member?.nickname as string,
          });
        }
      } catch (error) {
        console.log(
          'There was an error connecting to the room:',
          (error as Error).message,
        );
        await leaveRoom();
      }
    },
    [handleTrackSubscribed, handleTrackUnsubscribed],
  );

  const fetchTokenAndJoin = useCallback(async () => {
    if (!teamId || !roomName) return;

    try {
      const response = await issuedToken(Number(teamId))
        .setData({ roomName: roomName as string })
        .execute();

      await connectToRoom(response.data.token);
    } catch (err) {
      console.error('Error fetching token:', err);
    }
  }, [teamId, roomName, connectToRoom]);

  useEffect(() => {
    fetchTokenAndJoin();

    return () => {
      leaveRoom();
    };
  }, [fetchTokenAndJoin]);

  const leaveRoom = async () => {
    if (room) {
      await room.disconnect();
      setRoom(undefined);
      setLocalTrack(undefined);
      setRemoteTracks([]);
      setMediaState({
        isMicOn: true,
        isCameraOn: true,
        isScreenSharing: false,
      });
      navigate(`/team/${teamId}/meeting`);
    }
  };

  const toggleMedia = async (mediaType: 'mic' | 'camera' | 'screen') => {
    if (!room) return;

    try {
      let updatedState: Partial<typeof mediaState>;

      switch (mediaType) {
        case 'mic':
          updatedState = { isMicOn: !mediaState.isMicOn };
          await room.localParticipant.setMicrophoneEnabled(
            updatedState.isMicOn as boolean,
          );
          break;

        case 'camera':
          updatedState = { isCameraOn: !mediaState.isCameraOn };
          await room.localParticipant.setCameraEnabled(
            updatedState.isCameraOn as boolean,
          );
          break;

        case 'screen':
          updatedState = { isScreenSharing: !mediaState.isScreenSharing };
          await room.localParticipant.setScreenShareEnabled(
            updatedState.isScreenSharing as boolean,
          );
          break;
      }

      if (updatedState) {
        setMediaState((prev) => ({ ...prev, ...updatedState }));
      }
    } catch (err) {
      console.error(`Error toggling ${mediaType}:`, err);
    }
  };

  const renderLocalTracks = () => {
    if (!room?.localParticipant?.videoTrackPublications) return null;

    return Array.from(
      room.localParticipant.videoTrackPublications.values(),
    ).map((pub) => {
      const track = pub.videoTrack;
      if (!track) return null;

      const isScreenShare = pub.trackName?.includes('screen');

      return (
        <div
          key={pub.trackSid}
          onClick={() =>
            setSelectedTrack({
              track,
              participantIdentity: isScreenShare
                ? 'You (Screen Share)'
                : (member?.nickname as string),
            })
          }
        >
          <VideoComponent
            track={track}
            participantIdentity={
              isScreenShare
                ? 'You (Screen Share)'
                : (member?.nickname as string)
            }
            local={true}
            selected={selectedTrack?.track.sid === track.sid}
            chatRoomMembers={chatRoomMembers || []}
          />
        </div>
      );
    });
  };

  const renderRemoteTracks = () => {
    return remoteTracks.map((remoteTrack) =>
      remoteTrack.trackPublication.kind === 'video' ? (
        <div
          key={remoteTrack.trackPublication.trackSid}
          onClick={() =>
            setSelectedTrack({
              track: remoteTrack.trackPublication.videoTrack!,
              participantIdentity: remoteTrack.participantIdentity,
            })
          }
        >
          <VideoComponent
            track={remoteTrack.trackPublication.videoTrack!}
            participantIdentity={remoteTrack.participantIdentity}
            selected={
              selectedTrack?.track.sid === remoteTrack.trackPublication.trackSid
            }
            chatRoomMembers={chatRoomMembers || []}
          />
        </div>
      ) : (
        <AudioComponent
          key={remoteTrack.trackPublication.trackSid}
          track={remoteTrack.trackPublication.audioTrack!}
        />
      ),
    );
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
    <S.ViewContainer>
      <S.ViewHeader>
        <S.ViewHeaderBack onClick={leaveRoom}>
          <img src={backIcon} alt="back" />
          뒤로가기
        </S.ViewHeaderBack>
        <S.ViewHeaderRoomName>{roomName}</S.ViewHeaderRoomName>
      </S.ViewHeader>

      <S.ViewWrapper>
        <S.ViewScreenWrapper>
          <S.ViewScreenList>
            {renderRemoteTracks()}
            {renderLocalTracks()}
          </S.ViewScreenList>
          <S.ViewMainScreenWrapper>
            {selectedTrack && (
              <VideoComponent
                type="Full"
                track={selectedTrack.track}
                participantIdentity={selectedTrack.participantIdentity}
                chatRoomMembers={chatRoomMembers || []}
                mediaState={mediaState}
                toggleMedia={toggleMedia}
                leaveRoom={leaveRoom}
              />
            )}
          </S.ViewMainScreenWrapper>
        </S.ViewScreenWrapper>
        <S.ViewInfoWrapper>
          <S.ViewTeamMembersWrapper>
            <S.ViewTeamMembersHeader>팀원 목록</S.ViewTeamMembersHeader>
            <S.ViewTeamMemberList>
              {chatRoomMembers?.map((member) => (
                <S.ViewTeamMemberInfo key={member.memberId}>
                  <img src={MemberIcon} alt="memberIcon" />
                  <span>{member?.nickname}</span>
                  <S.ViewTeamMemberPosition>
                    <Label position={member?.position as PositionType} />
                  </S.ViewTeamMemberPosition>
                </S.ViewTeamMemberInfo>
              ))}
            </S.ViewTeamMemberList>
          </S.ViewTeamMembersWrapper>
          <S.ViewTeamMembersHeader>마일스톤 현황</S.ViewTeamMembersHeader>
          <S.ViewMilestoneList>
            {milestones?.map((milestone) => {
              const isCardOpen = openMilestoneId === milestone.milestoneId;

              return (
                <C.CardContainer
                  key={milestone.milestoneId}
                  onClick={() =>
                    setOpenMilestoneId(
                      isCardOpen ? null : milestone.milestoneId,
                    )
                  }
                >
                  <C.CardHeader>
                    <C.CardStatus>
                      {selectedStatus(milestone.status)}
                    </C.CardStatus>
                    <C.CardTitle>{milestone.title}</C.CardTitle>
                  </C.CardHeader>
                  {isCardOpen && (
                    <>
                      <C.CardDescription>
                        {milestone.description}
                      </C.CardDescription>
                      <C.CardFooter>
                        <C.MemberAvatars>
                          <AvatarGroup
                            members={[
                              {
                                name: milestone.creator,
                              },
                            ]}
                          />
                        </C.MemberAvatars>
                        <C.DueDate>
                          <C.Date>
                            {'시작일: ' +
                              formatKoreanDateTime(milestone.startDate)}
                          </C.Date>
                          <C.Date>
                            {'마감일: ' +
                              formatKoreanDateTime(milestone.dueDate)}
                          </C.Date>
                        </C.DueDate>
                      </C.CardFooter>
                    </>
                  )}
                </C.CardContainer>
              );
            })}
          </S.ViewMilestoneList>
        </S.ViewInfoWrapper>
      </S.ViewWrapper>
    </S.ViewContainer>
  );
};

export default MeetingViewPage;
