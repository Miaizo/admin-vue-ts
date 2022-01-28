import { defineStore } from "pinia"

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    count: 0
  }),
  getters: {
    getCount():number {
      return this.count
    }
  },
  actions: {
    increment():void {
      this.count++
    }
  }
})