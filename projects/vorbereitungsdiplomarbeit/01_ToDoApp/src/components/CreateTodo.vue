<template>
  <form class="row g-2 pb-5">
    <div class="input-group">
      <input class="form-control" v-model="newTodo"/>
      <button type="button" class="btn btn-primary" @click="addTodo">Hinzufügen</button>
    </div>
  </form>
</template>

<script lang="js">
import { defineComponent, ref } from 'vue'
import { useAppStore } from "../stores/store";

export default defineComponent({
  name: 'CreateTodo',
  setup() {
    const store = useAppStore();

    const newTodo = ref('');

    const addTodo = () => {
      store.createNewTodo(newTodo.value);
      store.showAlert("Todo wurde erfolgreich hinzugefügt.");
      newTodo.value = '';
    }

    return {
      newTodo,
      addTodo,
    }
  },
})
</script>
