import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { queryClient } from '../QueryClient';
import { useApiQuery } from '../apis/config/builder/ApiBuilder';
import { getTeamList } from '../apis/team/team';
import type { teamInfo } from '../apis/team/team.types';

export const useCurrentTeam = () => {
  const { teamId } = useParams();
  const numericTeamId = Number(teamId);
  const [team, setTeam] = useState<teamInfo | null>(null);

  const cachedTeams = queryClient.getQueryData<teamInfo[]>(['teams']);

  const { data: fetchedTeams } = useApiQuery(getTeamList(), 'teams');

  useEffect(() => {
    const source = cachedTeams || fetchedTeams;
    if (source) {
      const found = source.find((t) => t.id === numericTeamId);
      setTeam(found ?? null);
    }
  }, [cachedTeams, fetchedTeams, numericTeamId]);

  return team;
};
