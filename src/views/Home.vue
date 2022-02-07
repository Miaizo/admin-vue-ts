<template>
  <div>
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue'
import vHeader from "@/components/Header.vue";
export default defineComponent({
  name: 'Home',
  components: {
    vHeader
  },
  setup() {
    return {
      
    }
  }
});
</script>
<style scoped>
</style>