<template>
  <CreateTodo class="pt-5" />
  <ListTodos/>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import ListTodos from "../components/ListTodos.vue";
import CreateTodo from "../components/CreateTodo.vue";

export default defineComponent({
  name: 'Todos',
  components: { Alert, CreateTodo, ListTodos },
  setup() {
    //
  },
})
</script>
