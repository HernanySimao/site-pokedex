import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useModalStore = defineStore('modal', () => {
    const showModal = ref(false);
    // Função para abrir o modal
    const openModal = () => {
        showModal.value = true;
    };
    // Função para fechar o modal
    const closeModal = () => {
        showModal.value = false;
    };
    return {
        showModal,
        openModal,
        closeModal,
    };
});
