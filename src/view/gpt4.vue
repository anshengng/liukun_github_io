<script setup lang="ts">
import { ref } from 'vue';
import { sendByfour } from '../utils/chat';
import { ElMessage } from 'element-plus';

const content = ref('');
const answer = ref('')

const submit = async () => {
    ElMessage({
        message: '发送成功',
        type: 'success',
    })
    await sendByfour(content.value, answer);
    answer.value = ''
}
</script>
<template>
    <div id="answer" class="h-[400px] w-[300px]  md:w-[600px] md:h-[300px] overflow-y-auto ">
        {{ answer }}
    </div>
    <div class="flex flex-col">
        <textarea v-model=content class="w-[300px] my-2 md:w-[600px] md:h-[100px]  px-4 border-2 py-1"></textarea>
        <button @click="submit" class=" border-0 focus:outline-none ">发送</button>
    </div>
</template>


<style lang="scss"></style>