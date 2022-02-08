import { defineStore } from 'pinia'
import { login, loginParam } from '@/api/index'
import router from '@/router/index'
import { IStatus } from '@/type/store/layout'
import { setLocal, getLocal, decode } from '@/utils/tools'

const { ACCESS_TOKEN } = getLocal<IStatus>('token')

export const useLayoutStore = defineStore({
  id: 'layout',
  state: () => ({
    // example
    count: 0,
    // 侧边栏
    tags: {
      collapse: false,
    },
    // token
    status: {
      ACCESS_TOKEN: ACCESS_TOKEN || '',
    },
  }),
  getters: {
    // example
    getCount(): number {
      return this.count
    },
    getStatus(): IStatus {
      return this.status
    },
  },
  actions: {
    // example
    increment(): void {
      this.count++
    },
    // 侧边栏折叠
    handleCollapse(data: boolean) {
      this.tags.collapse = data
    },
    async login(param: loginParam): Promise<void> {
      // const res = await login(param)
      // const token = res.data.Data
      const token = 'admin'
      this.status.ACCESS_TOKEN = token
      setLocal('token', this.status, 1000 * 60 * 60)
      setLocal('user_name', {user: 'admin'})
      const { query } = router.currentRoute.value
      router.push(typeof query.from === 'string' ? decode(query.from) : '/')
    },
    logout(): void {
      this.status.ACCESS_TOKEN = ''
      localStorage.removeItem('token')
      history.go(0)
    },
  },
})
