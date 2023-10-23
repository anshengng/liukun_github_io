<script setup lang="ts">
</script>
<template>
  <div>
    <span class="title">liukun.github.io</span>
  </div>
  <el-button type="success" plain @click="$router.push('/gpt3')" class="m-2">chatgpt 3.5</el-button>
  <el-button type="primary" plain @click="$router.push('/gpt4')" class="m-2">chatgpt 4.0</el-button>
</template>


<style lang="scss">
.title {
  font-size: 2em;
}
</style>