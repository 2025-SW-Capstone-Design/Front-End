import { useEffect, useState } from 'react';
import {
  getLabels,
  createLabel,
  updateLabel,
  deleteLabel,
} from '../apis/label/label';
import type {
  label,
  IssueLabelCreateRequest,
  IssueLabelUpdateRequest,
  IssueLabelDeleteRequest,
} from '../apis/label/label.types';

export const useTaskLabels = (
  teamId: number | undefined,
  projectId: number | null,
) => {
  const [labels, setLabels] = useState<label[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const fetchLabels = async () => {
    if (!teamId || !projectId) return;
    setLoading(true);
    try {
      const response = await getLabels(teamId, projectId).execute();
      setLabels(response.data);
    } catch (err) {
      console.error('Failed to fetch labels:', err);
      setLabels([]);
      setError(err);
      alert('라벨 목록을 불러오는 데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const addLabel = async (data: IssueLabelCreateRequest) => {
    if (!teamId) return;
    try {
      await createLabel(teamId).setData(data).execute();
      await fetchLabels();
      alert('라벨이 성공적으로 추가되었습니다.');
    } catch (err) {
      console.error('Failed to create label:', err);
      setError(err);
      alert('라벨 추가에 실패했습니다.');
    }
  };

  const editLabel = async (labelId: number, data: IssueLabelUpdateRequest) => {
    if (!teamId) return;
    try {
      await updateLabel(teamId, labelId).setData(data).execute();
      await fetchLabels();
      alert('라벨이 성공적으로 수정되었습니다.');
    } catch (err) {
      console.error('Failed to update label:', err);
      setError(err);
      alert('라벨 수정에 실패했습니다.');
    }
  };

  const removeLabel = async (
    labelId: number,
    data: IssueLabelDeleteRequest,
  ) => {
    if (!teamId) return;
    try {
      await deleteLabel(teamId, labelId).setData(data).execute();
      await fetchLabels();
      alert('라벨이 성공적으로 삭제되었습니다.');
    } catch (err) {
      console.error('Failed to delete label:', err);
      setError(err);
      alert('라벨 삭제에 실패했습니다.');
    }
  };

  useEffect(() => {
    fetchLabels();
  }, [teamId, projectId]);

  return {
    labels,
    loading,
    error,
    fetchLabels,
    addLabel,
    editLabel,
    removeLabel,
  };
};
