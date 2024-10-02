import { defineStore } from 'pinia';
export const useIdStore = defineStore('idStore', {
    state: () => ({
        selectedId: null,
    }),
    actions: {
        setId(id) {
            this.selectedId = id;
        },
        clearId() {
            this.selectedId = null;
        }
    },
});
