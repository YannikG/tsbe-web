<template>
  <form class="row g-2 pb-5">
    // erweitern
  </form>
</template>

<script lang="js">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CreateTodo',
  setup() {

    const newTodo = ref('')

    const addTodo = () => {
      // erweitern
    }

    return {
      newTodo,
      addTodo,
    }
  },
})
</script>
