import React, { useEffect, useState, useCallback, useMemo } from 'react';
import * as S from './Kanban.styles';
import KanbanList from '../KanbanList/KanbanList';
import { queryClient } from '../../QueryClient';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { getTeamMembers } from '../../apis/teamMember/teamMember';
import { updateMilestoneStatus } from '../../apis/milestone/milestone';
import AvatarGroup from '../AvatarGroup/AvatarGroup';
import IconInput from '../IconInput/IconInput';
import type { MilestoneResponse } from '../../apis/milestone/milestone.types';
import type { KanbanProps } from './Kanban.types';
import type { teamMemberInfo } from '../../apis/teamMember/teamMember.types';
import type { AvatarMember } from '../AvatarGroup/AvatarGroup.types';

const Kanban = ({ teamId, selectedProjectId }: KanbanProps) => {
  const cachedMilestones = queryClient.getQueryData<MilestoneResponse[]>([
    'milestones',
    teamId,
    selectedProjectId,
  ]);

  const [milestones, setMilestones] = useState<MilestoneResponse[]>([]);
  const [avatarMembers, setAvatarMembers] = useState<AvatarMember[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [milestoneToProjectMap, setMilestoneToProjectMap] = useState<
    Record<number, number>
  >({});

  const updateMilestoneToProjectMap = useCallback(() => {
    if (selectedProjectId !== null) return;

    const mapping: Record<number, number> = {};
    queryClient
      .getQueryCache()
      .findAll({ queryKey: ['milestones', teamId] })
      .forEach((query) => {
        const queryKey = query.queryKey;
        if (!Array.isArray(queryKey) || queryKey.length < 3) return;

        const projectId = queryKey[2];
        if (typeof projectId === 'number' && projectId > 0) {
          const projectMilestones = queryClient.getQueryData<
            MilestoneResponse[]
          >(['milestones', teamId, projectId]);

          projectMilestones?.forEach((milestone) => {
            mapping[milestone.milestoneId] = projectId;
          });
        }
      });

    setMilestoneToProjectMap(mapping);
  }, [selectedProjectId, teamId]);

  const handleQueryCacheChange = useCallback(() => {
    if (selectedProjectId === null) {
      updateMilestoneToProjectMap();
    }
  }, [selectedProjectId, updateMilestoneToProjectMap]);

  useEffect(() => {
    cachedMilestones && setMilestones(cachedMilestones);
  }, [cachedMilestones]);

  useEffect(() => {
    const fetchMembers = async () => {
      if (!teamId) return;
      try {
        const response = await getTeamMembers(teamId).execute();
        setAvatarMembers(
          response.data.map((member: teamMemberInfo) => ({
            name: member.nickname,
            position: member.position,
          })),
        );
      } catch (error) {
        console.error('팀 멤버 조회 실패:', error);
      }
    };
    fetchMembers();
  }, [teamId]);

  useEffect(() => {
    updateMilestoneToProjectMap();
    const unsubscribe = queryClient
      .getQueryCache()
      .subscribe(handleQueryCacheChange);
    return () => unsubscribe();
  }, [
    teamId,
    selectedProjectId,
    handleQueryCacheChange,
    updateMilestoneToProjectMap,
  ]);

  const handleDrop = useCallback(
    (milestone: MilestoneResponse, newStatus: string) => {
      setMilestones((prev) =>
        prev.map((m) =>
          m.milestoneId === milestone.milestoneId
            ? { ...m, status: newStatus }
            : m,
        ),
      );

      const projectIdForUpdate =
        selectedProjectId ?? milestoneToProjectMap[milestone.milestoneId];

      if (!projectIdForUpdate) {
        console.error(
          `마일스톤 ${milestone.milestoneId}에 대한 프로젝트 ID를 찾을 수 없습니다.`,
        );
        setMilestones((prev) =>
          prev.map((m) =>
            m.milestoneId === milestone.milestoneId
              ? { ...m, status: milestone.status }
              : m,
          ),
        );
        return;
      }

      updateMilestoneStatus(teamId, projectIdForUpdate, milestone.milestoneId)
        .setData({ status: newStatus })
        .execute()
        .then(() => {
          const updateCache = (key: (string | number | null)[]) => {
            const cached = queryClient.getQueryData<MilestoneResponse[]>(key);
            if (cached) {
              queryClient.setQueryData(
                key,
                cached.map((m) =>
                  m.milestoneId === milestone.milestoneId
                    ? { ...m, status: newStatus }
                    : m,
                ),
              );
            }
          };

          updateCache(['milestones', teamId, projectIdForUpdate]);
          updateCache(['milestones', teamId, null]);
        })
        .catch((err) => {
          console.error('상태 업데이트 실패:', err);
          setMilestones((prev) =>
            prev.map((m) =>
              m.milestoneId === milestone.milestoneId
                ? { ...m, status: milestone.status }
                : m,
            ),
          );
        });
    },
    [selectedProjectId, teamId, milestoneToProjectMap],
  );

  const filteredMilestones = useMemo(
    () =>
      milestones.filter((m) =>
        m.title.toLowerCase().includes(searchKeyword.toLowerCase()),
      ),
    [milestones, searchKeyword],
  );

  const columns = useMemo(
    () => [
      { title: '진행전', status: 'NOT_STARTED' },
      { title: '진행중', status: 'IN_PROGRESS' },
      { title: '완료', status: 'DONE' },
    ],
    [],
  );

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
          {columns.map(({ title, status }) => (
            <KanbanList
              key={status}
              title={title}
              milestones={filteredMilestones.filter((m) => m.status === status)}
              onDropMilestone={(m) => handleDrop(m, status)}
            />
          ))}
        </S.KanbanListContainer>
      </DndProvider>
    </S.KanbanContainer>
  );
};

export default Kanban;
