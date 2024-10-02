import { defineStore } from 'pinia';

export const useIdStore = defineStore('idStore', {
  state: () => ({
    selectedId: null as string | number | null, 
  }),
  actions: {
    setId(id: string | number) {
      this.selectedId = id;
    },
    clearId() {
      this.selectedId = null;
    }
  },
});
