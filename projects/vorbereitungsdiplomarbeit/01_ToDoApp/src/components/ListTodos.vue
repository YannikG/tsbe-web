<template>
  <router-link v-for="todo in todos" :key="todo.id" :to="`/${todo.id}`" class="text-decoration-none text-dark">
    // erweitern
  </router-link>
</template>

<script lang="js">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'ListTodos',
  setup() {

    const todos = computed(() => {
      // erweitern
    })

    return {
      todos,
    }
  },
})
</script>
