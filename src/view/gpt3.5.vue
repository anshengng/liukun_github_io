<script setup lang="ts">
import { ref } from 'vue';
import { send } from '../utils/chat';

const content = ref('');
const answer = ref('')
const submit = async () => {
    const result = await send(content.value);
    answer.value = result.data.choices[0].message.content;
    content.value = ''
}
</script>
<template>
    <div id="answer">
        {{ answer }}
    </div>
    <div class="flex flex-col">
        <textarea v-model=content class="w-[300px] md:w-[600px] md:h-[100px]  px-4 border-2 py-1"></textarea>
        <button @click="submit" class="my-2">发送</button>
    </div>
</template>


<style lang="scss"></style>