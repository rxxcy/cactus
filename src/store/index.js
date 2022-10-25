import { createPinia, defineStore } from 'pinia'

export const pinia = createPinia()

export const useRootStore = defineStore('root', {
  state: () => {
    return {
      show_header: true,
    }
  },
  actions: {
    setShowHeader(show = true) {
      this.show_header = show
    },
  },
  getters: {},
})
