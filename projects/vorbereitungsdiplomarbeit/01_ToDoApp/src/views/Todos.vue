<template>
  <Alert class="mt-5" />
  <CreateTodo class="pt-5"  />
  <ListTodos/>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import ListTodos from "../components/ListTodos.vue";
import CreateTodo from "../components/CreateTodo.vue";
import Alert from "../components/Alert.vue";

export default defineComponent({
  name: 'Todos',
  components: { Alert, CreateTodo, ListTodos },
  setup() {
    //
  },
})
</script>
