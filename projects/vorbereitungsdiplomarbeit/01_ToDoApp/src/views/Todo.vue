<template>
    <div v-if="todo">
        <div class="row mt-5">
            <Alert />
        </div>
        <div class="row">
            <div class="col-sm-12">¨
                <RouterLink role="button" to="/" class="btn btn-outline-secondary">Zurück</RouterLink>
            </div>
        </div>
        <ShowTodo :todo="todo" />
        <div class="row">
            ¨<div class="col-sm-12 d-flex justify-content-end">
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-success" @click="updateTodo">Aktualisieren</button>
                    <button type="button" class="btn btn-danger" @click="deleteTodo">Löschen</button>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-5" v-else>
        <div class="alert alert-danger" role="alert">
            Todo nicht gefunden.
        </div>
    </div>
</template>
<script lang="js">
import { computed, defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { useAppStore } from "../stores/store";
import ShowTodo from "../components/ShowTodo.vue";
import Alert from "../components/Alert.vue";
import router from '../router/router';

export default defineComponent({
    name: 'Todo',
    components: { Alert, RouterLink, ShowTodo},
    props: {
        id: {
            type: Number,
            required: true,
        }
    },
    setup(props) {
        const store = useAppStore();
        
        const todo = computed(() => {
            return store.getTodoById(props.id);
        });

        const deleteTodo = () => {
            store.deleteTodo(todo.value.id);
            store.showAlert("Todo wurde erfolgreich gelöscht.");
            redirectBack();
        }

        const updateTodo = () => {
            store.updateTodo(todo.value.id, todo.value.content);
            store.showAlert("Todo wurde erfolgreich aktualisiert.");
            redirectBack();
        }

        const redirectBack = () => {
            router.push('/');
        }

        return {
            todo,
            deleteTodo,
            updateTodo,
        }
    },
});
</script>