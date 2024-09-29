import { defineStore } from 'pinia';
import { ref } from 'vue';

interface ModalState {
  showModal: boolean;
}

export const useModalStore = defineStore('modal', () => {
  const showModal = ref<ModalState['showModal']>(false);

  // Função para abrir o modal
  const openModal = (): void => {
    showModal.value = true;
  };

  // Função para fechar o modal
  const closeModal = (): void => {
    showModal.value = false;
  };

  return {
    showModal,
    openModal,
    closeModal,
  };
});
