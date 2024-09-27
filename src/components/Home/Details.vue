<script setup>
import { useIdStore } from "../../stores/useIdStore";

const idStore = useIdStore();
</script>


<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="card text-center">
          <div class="card-body">
            <div><img src="" alt="" /></div>
            <div>
              <p>O ID recebido é: {{ idStore.selectedId }}</p>
              <span>#123</span>
              <h1>Nome</h1>
              <span>Empero</span>
              <button>tipo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>