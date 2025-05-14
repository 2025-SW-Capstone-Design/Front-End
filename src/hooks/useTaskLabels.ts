// hooks/useTaskLabels.ts
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
    } finally {
      setLoading(false);
    }
  };

  const addLabel = async (data: IssueLabelCreateRequest) => {
    if (!teamId) return;
    try {
      await createLabel(teamId).setData(data).execute();
      await fetchLabels();
    } catch (err) {
      console.error('Failed to create label:', err);
      setError(err);
    }
  };

  const editLabel = async (labelId: number, data: IssueLabelUpdateRequest) => {
    if (!teamId) return;
    try {
      await updateLabel(teamId, labelId).setData(data).execute();
      await fetchLabels();
    } catch (err) {
      console.error('Failed to update label:', err);
      setError(err);
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
    } catch (err) {
      console.error('Failed to delete label:', err);
      setError(err);
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
