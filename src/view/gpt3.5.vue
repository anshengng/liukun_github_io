<script setup lang="ts">
import { ref } from 'vue';

const content = ref('');
const submit = () => {
    console.log(content.value);

}
</script>
<template>
    <span>3.5</span>
    <div id="answer">
        
    </div>
    <div class="flex flex-col">
        <textarea v-model=content cols="100" rows="4" class="px-4 border-2"></textarea>
        <button @click="submit" class="my-2">发送</button>
    </div>
</template>


<style lang="scss"></style>