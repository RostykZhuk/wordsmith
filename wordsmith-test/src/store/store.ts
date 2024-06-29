import { IAmendmentSet } from '@/types/amendmentSet.interface';
import { IInsertParagraph } from '@/types/insertParagraph.interface';
import { IModifyRun } from '@/types/modifyRun.interface';
import { create } from 'zustand';

type UpdateData =
  | Partial<IAmendmentSet>
  | Partial<IModifyRun>
  | Partial<IInsertParagraph>;

type Store = {
  amendmentSets: IAmendmentSet[];
  getAmendments: () => Promise<void>;
  chosenAmendment: IAmendmentSet | null;
  getOne: (amendmentId: string | null) => Promise<void>;
  updateOne: (amendmentId: string, updatedData: UpdateData) => Promise<void>;
};

export const useAmendmentSets = create<Store>()((set) => ({
  amendmentSets: [],
  chosenAmendment: null,
  getAmendments: async () => {
    try {
      const response = await fetch('http://localhost:5000/amendments');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: IAmendmentSet[] = await response.json();
      set({ amendmentSets: data });
    } catch (error) {
      console.error('Failed to fetch amendment sets:', error);
    }
  },
  getOne: async (amendmentId: string | null) => {
    if (!amendmentId) {
      set({ chosenAmendment: null });

      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/amendments/${amendmentId}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: IAmendmentSet = await response.json();
      set({ chosenAmendment: data });
    } catch (error) {
      console.error('Failed to fetch amendment sets:', error);
    }
  },
  updateOne: async (amendmentId: string, updatedData: UpdateData) => {
    try {
      const response = await fetch(
        `http://localhost:5000/amendments/${amendmentId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedAmendment: IAmendmentSet = await response.json();

      // Update the amendmentSets state with the updated amendment
      set((state) => ({
        amendmentSets: state.amendmentSets.map((amendment) =>
          amendment._id === amendmentId ? updatedAmendment : amendment
        ),
      }));

      // Update the chosenAmendment if it is the one that was updated
      set((state) => ({
        chosenAmendment:
          state.chosenAmendment && state.chosenAmendment._id === amendmentId
            ? updatedAmendment
            : state.chosenAmendment,
      }));
    } catch (error) {
      console.error('Failed to update amendment set:', error);
    }
  },
}));
