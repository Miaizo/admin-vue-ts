<template>
  <div>
    <div>home</div>
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue'
export default defineComponent({
  name: 'Home',
  setup() {
    return {
    }

  }
});
</script>
<style scoped>
</style>