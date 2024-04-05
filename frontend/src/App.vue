<script setup>
import { ref } from 'vue';
import axios from "axios";

const jokes = ref([
]);

axios
  .get('/api/jokes')
  .then((res) => {
    jokes.value = res.data;
  })
  .catch(err => console.log(err));

</script>

<template>
  <div>
    <h1>Fullstack is on the way...</h1>
    JOKES: {{ jokes.length }}
    <div v-for="joke in jokes" :key="joke.id" class="jokes">
      <p>{{ joke.id }}</p>
      <h3>{{ joke.title }}</h3>
      <p>{{ joke.content }}</p>
    </div>
  </div>
</template>

<style scoped>
.jokes {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
