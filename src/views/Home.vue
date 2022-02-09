<template>
  <div>
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <div class="content-box" :class="{ 'content-collapse': collapse }">
      <div class="content">
        <router-view v-slot="{ Component }">
          <transition name="move" mode="out-in">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import vHeader from '@/components/Header.vue'
import vSidebar from '@/components/Sidebar.vue'
import { useLayoutStore } from '@/store/modules/layout'
export default defineComponent({
  name: 'Home',
  components: {
    vHeader,
    vSidebar,
  },
  setup() {
    const { tags } = useLayoutStore()
    const collapse = computed(() => tags.collapse)
    return {
      collapse,
    }
  },
})
</script>
<style scoped>
.content-box {
  position: absolute;
  left: 250px;
  right: 0;
  top: 70px;
  bottom: 0;
  padding-bottom: 30px;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
  background: #f0f0f0;
}
.content {
  width: auto;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  box-sizing: border-box;
}
.content-collapse {
  left: 65px;
}
</style>
