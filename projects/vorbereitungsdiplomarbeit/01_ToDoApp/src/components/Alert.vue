<template>
    <div class="alert alert-success" role="alert" v-if="alert.show">
        {{ alert.message }}
    </div>
</template>
<script lang="js">
import { defineComponent, computed } from 'vue';
import { useAppStore } from "../stores/store";

export default defineComponent({
    name: 'Alert',
    setup() {
        const store = useAppStore();
        const alert = computed(() => {
            return store.getAlert;
        });

        return {
            alert
        }
    },
});
</script>