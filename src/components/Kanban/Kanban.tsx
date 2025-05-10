import React, { useEffect, useState } from 'react';
import * as S from './Kanban.styles';
import KanbanList from '../KanbanList/KanbanList';
import { queryClient } from '../../QueryClient';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { getTeamMembers } from '../../apis/teamMember/teamMember';

import type { MilestoneResponse } from '../../apis/milestone/milestone.types';
import type { KanbanProps } from './Kanban.types';
import type { teamMemberInfo } from '../../apis/teamMember/teamMember.types';
import type { AvatarMember } from '../AvatarGroup/AvatarGroup.types';
import AvatarGroup from '../AvatarGroup/AvatarGroup';
import IconInput from '../IconInput/IconInput';

const Kanban = ({ teamId, selectedProjectId }: KanbanProps) => {
  const cachedMilestones = queryClient.getQueryData<MilestoneResponse[]>([
    'milestones',
    teamId,
    selectedProjectId,
  ]);

  const [milestones, setMilestones] = useState<MilestoneResponse[]>([]);
  const [avatarMembers, setAvatarMembers] = useState<AvatarMember[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const filteredMilestones = milestones.filter((m) =>
    m.title.toLowerCase().includes(searchKeyword.toLowerCase()),
  );

  const notStarted = filteredMilestones.filter(
    (m) => m.status === 'NOT_STARTED',
  );
  const inProgress = filteredMilestones.filter(
    (m) => m.status === 'IN_PROGRESS',
  );
  const done = filteredMilestones.filter((m) => m.status === 'DONE');

  useEffect(() => {
    if (cachedMilestones) {
      setMilestones(cachedMilestones);
    }
  }, [cachedMilestones]);

  useEffect(() => {
    fetchTeamMembers();
  }, [teamId]);

  const handleDrop = (milestone: MilestoneResponse, newStatus: string) => {
    setMilestones((prev) =>
      prev.map((m) =>
        m.milestoneId === milestone.milestoneId
          ? { ...m, status: newStatus }
          : m,
      ),
    );
  };

  const fetchTeamMembers = async () => {
    if (teamId) {
      const response = await getTeamMembers(teamId).execute();
      const memberInfoList: teamMemberInfo[] = response.data;

      const mappedAvatars: AvatarMember[] = memberInfoList.map((member) => ({
        name: member.nickname,
        position: member.position,
      }));
      setAvatarMembers(mappedAvatars);
    }
  };

  return (
    <S.KanbanContainer>
      <S.KanbanHeader>
        <S.KanbanHeaderText>마일스톤 칸반보드</S.KanbanHeaderText>
        <S.KanbanHeaderRight>
          <AvatarGroup members={avatarMembers} />
          <IconInput
            placeholder="마일스톤 검색"
            width="250px"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </S.KanbanHeaderRight>
      </S.KanbanHeader>
      <DndProvider backend={HTML5Backend}>
        <S.KanbanListContainer>
          <KanbanList
            title="진행전"
            milestones={notStarted}
            onDropMilestone={(m) => handleDrop(m, 'NOT_STARTED')}
          />
          <KanbanList
            title="진행중"
            milestones={inProgress}
            onDropMilestone={(m) => handleDrop(m, 'IN_PROGRESS')}
          />
          <KanbanList
            title="완료"
            milestones={done}
            onDropMilestone={(m) => handleDrop(m, 'DONE')}
          />
        </S.KanbanListContainer>
      </DndProvider>
    </S.KanbanContainer>
  );
};

export default Kanban;
