<template>
  <div>
    <div>Dashboard</div>
    <div>{{ count }}</div>
    <button @click="add">+</button>
  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref, computed } from 'vue'
import { useTodoStore } from '@/store/modules/todo'
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
      add
    }
  }
})
</script>
<style scoped>
</style>