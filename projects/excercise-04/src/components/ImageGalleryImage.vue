<template>
    <figure>
        <img :src="url" alt="a very nice picture"/>
    </figure>
</template>
<script>
export default {
    props : {
        url: String
    }
}
</script>