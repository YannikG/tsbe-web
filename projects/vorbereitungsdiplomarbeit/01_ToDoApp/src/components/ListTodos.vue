<template>
  <div class="row" v-for="todo in todos" :key="todo.id" >
    <div class="col-sm-12">
      <div class="card" style="margin-bottom: 1em;">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-8">
                {{ todo.content }}
              </div>
              <div class="col-sm-4 d-flex justify-content-end">
                <time class="item-time">{{ todo.created_at }}</time>
                <router-link role="button" :to="`/${todo.id}`" class="btn btn-outline-secondary">Details</router-link>
              </div>
            </div>
          </div>
        </div>
    </div>   
  </div>
  <div v-if="todos.length === 0" class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-body">
          <p class="card-text">Keine Todos vorhanden.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent, computed } from 'vue'
import { useAppStore } from "../stores/store";

export default defineComponent({
  name: 'ListTodos',
  setup() {
    const store = useAppStore();

    const todos = computed(() => {
      return store.getTodos;
    })
    return {
      todos,
    }
  },
})
</script>
<style>
.item-time {
  font-size: 0.8em;
  margin-right: 2em;
  line-height: 100%;
  text-align: center;
}
</style>