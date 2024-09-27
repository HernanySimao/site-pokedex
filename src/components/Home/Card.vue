<script setup>
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <div v-for="i in 6" :key="i" class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-center">
                <img src="" alt="image" />
              </div>
              <div class="text-center">
                <span>Nª 123</span>
                <h2>Nome</h2>
                <button>Tipo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>