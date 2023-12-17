import { create } from "zustand";

// we use ? for undefined/optional, since at first no filter applied
interface GameQuery {
  searchText?: string;
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set(({ gameQuery }) => ({ gameQuery: { ...gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set(({ gameQuery }) => ({ gameQuery: { ...gameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set(({ gameQuery }) => ({
      gameQuery: { ...gameQuery, sortOrder },
    })),
}));

export default useGameQueryStore;
