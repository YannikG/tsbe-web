<template>
    <div class="row mt-5">
        <Alert />
    </div>
    <div class="row">
        <div class="col-sm-12">¨
            <RouterLink role="button" to="/" class="btn btn-outline-secondary">Zurück</RouterLink>
        </div>
    </div>
    <div class="row mt-2">
        <div class="col-sm-12 d-flex justify-content-end">
            <p>Task wurde erstellt am <strong>{{ todo.created_at }}</strong></p>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <input class="form-control" v-model="todo.content" />
        </div>
    </div>
    <div class="row">
        ¨<div class="col-sm-12 d-flex justify-content-end">
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-success" @click="updateTodo">Aktualisieren</button>
                <button type="button" class="btn btn-danger" @click="deleteTodo">Löschen</button>
            </div>
        </div>
    </div>
</template>
<script lang="js">
import { computed, defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { useAppStore } from "../stores/store";
import Alert from "../components/Alert.vue";
import router from '../router/router';

export default defineComponent({
    name: 'Todo',
    components: { Alert, RouterLink},
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
            store.deleteTodo(props.id);
            store.showAlert("Todo wurde erfolgreich gelöscht.");
            router.push('/');
        }

        const updateTodo = () => {
            store.updateTodo(props.id, todo.value.content);
            store.showAlert("Todo wurde erfolgreich aktualisiert.");
        }

        return {
            todo,
            deleteTodo,
            updateTodo,
        }
    },
});
</script>