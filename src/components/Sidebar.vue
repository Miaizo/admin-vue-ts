<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <el-menu-item index="/dashboard">
        <el-icon><home-filled /></el-icon>
        <template #title>
          <span>系统首页</span>
        </template>
      </el-menu-item>
      <el-sub-menu index="/menu">
        <template #title>
          <el-icon><icon-menu /></el-icon>
          <span>二级菜单</span>
        </template>
        <el-menu-item index="/403">403</el-menu-item>
        <el-sub-menu>
          <template #title><span>三级菜单</span></template>
          <el-menu-item index="/404">404</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="/settings">
        <el-icon><setting /></el-icon>
        <template #title>设置</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useLayoutStore } from '@/store/modules/layout'
import { HomeFilled, Menu as IconMenu, Setting } from '@element-plus/icons-vue'

const route = useRoute()
const onRoutes = computed(() => {
  return route.path
})

const { tags } = useLayoutStore()
const collapse = computed(() => tags.collapse)
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
