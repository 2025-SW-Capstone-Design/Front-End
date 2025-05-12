import { create } from 'zustand';
import type { label } from '../apis/label/label.types';

interface TaskLabelState {
  selectedLabels: label[];
  toggleLabel: (label: label) => void;
  isLabelSelected: (labelId: number) => boolean;
  resetSelectedLabels: () => void;
}

export const useTaskLabelStore = create<TaskLabelState>((set, get) => ({
  selectedLabels: [],

  toggleLabel: (label) => {
    set((state) => {
      const isLabelAlreadySelected = state.selectedLabels.some(
        (selectedLabel) => selectedLabel.labelId === label.labelId,
      );

      if (isLabelAlreadySelected) {
        return {
          selectedLabels: state.selectedLabels.filter(
            (selectedLabel) => selectedLabel.labelId !== label.labelId,
          ),
        };
      } else {
        return {
          selectedLabels: [...state.selectedLabels, label],
        };
      }
    });
  },

  isLabelSelected: (labelId) => {
    return get().selectedLabels.some((label) => label.labelId === labelId);
  },

  resetSelectedLabels: () => {
    set({ selectedLabels: [] });
  },
}));
