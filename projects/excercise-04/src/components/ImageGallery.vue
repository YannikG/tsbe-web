<template>
    <ImageGalleryImage :url="getNextImage()"></ImageGalleryImage>
    <button 
        :disabled="currentIndex <= 0" 
        v-on:click="onImageChange(-1)">
        Previous
    </button>
    <button 
        :disabled="currentIndex >= images.length -1" 
        v-on:click="onImageChange(1)">
        Next
    </button>
</template>
<script setup>
    import ImageGalleryImage from "./ImageGalleryImage.vue";
    import { onMounted } from 'vue'

    onMounted(() => {
        document.addEventListener("keyup", (e) => {
            console.log("event");
            if (e.code == "ArrowLeft")
                onImageChange(-1);
            else if (e.code == "ArrowRight")
                onImageChange(1);
        })
    })
</script>
<script>
export default {
    props : {
        images: []
    },
    data() {
        return {
            currentIndex: 0
        }
    },
    methods: {
        getNextImage() {
            if (this.currentIndex < this.images.length && this.currentIndex >= 0) {
                return this.images[this.currentIndex];
            }
            alert("unknown image index");
        },
        onImageChange(direction) {
            if (direction == -1 && this.currentIndex <= 0)
                return;

            if (direction == 1 && this.currentIndex == this.images.length - 1)
                return;

            this.currentIndex += direction;
        }
    }
}
</script>