<template>
  <div>
    <div>Dashboard</div>
    <div>{{ format(count) }}</div>
    <button @click="add">+</button>
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-button>中文</el-button>
    </el-row>
  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref, computed } from 'vue'
import { useTodoStore } from '@/store/modules/user'
import { format } from '@/utils/tools'
export default defineComponent({
  name: 'Dashboard',
  setup() {
    const todo = useTodoStore()
    const count = computed(() => todo.count)
    const add = () => {
      todo.increment()
    }
    return {
      count,
      add,
      format
    }
  }
})
</script>
<style scoped>
</style>