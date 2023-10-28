<script setup lang="ts">
import { ref } from 'vue';
import { send } from '../utils/chat';
import { ElMessage } from 'element-plus';

const content = ref('hello');
const answer = ref('')

const submit = async () => {
    ElMessage({
        type: 'success',
        message: '发送成功',
    })
    answer.value = '正在思考中...'
    // const result = await send(content.value);
    // answer.value = result.data.choices[0].message.content;
    // content.value = ''
    await send(content.value);

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