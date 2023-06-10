<template>
        <div class="row">
            <div class="col-sm-12 d-flex justify-content-end">
                <p>Task wurde erstellt am <strong>{{ todo.created_at }}</strong></p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <input class="form-control" v-model="todo.content" />
            </div>
        </div>
</template>
<script lang="js">
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: 'ShowTodo',
    props: {
        todo: {
            type: Object,
            required: true,
        }
    },
    setup(props) {
        const todo = computed(() => {
            return props.todo;
        });

        return {
            todo,
        }
    }
});
</script>