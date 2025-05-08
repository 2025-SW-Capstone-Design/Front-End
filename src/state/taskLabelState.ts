import { create } from 'zustand';
import type { label } from '../apis/label/label.types';

interface TaskLabelState {
  selectedLabels: label[];
  toggleLabel: (labelInfo: label) => void;
  isLabelSelected: (labelId: number) => boolean;
}

export const useTaskLabelStore = create<TaskLabelState>((set, get) => ({
  selectedLabels: [],
  toggleLabel: (labelInfo) => {
    const { selectedLabels } = get();
    const isSelected = selectedLabels.some(
      (label) => label.labelId === labelInfo.labelId,
    );

    if (isSelected) {
      set({
        selectedLabels: selectedLabels.filter(
          (label) => label.labelId !== labelInfo.labelId,
        ),
      });
    } else {
      set({ selectedLabels: [...selectedLabels, labelInfo] });
    }
  },
  isLabelSelected: (labelId) =>
    get().selectedLabels.some((label) => label.labelId === labelId),
}));
