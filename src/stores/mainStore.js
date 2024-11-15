import { defineStore } from 'pinia'
import constituensList from '@/api/constituyentes/constituensList.json'

export const useMainStore = defineStore('main', {
  state: () => ({
    tableData: constituensList,
    currentItem: null
  }),
  getters: {
    getCurrentItem: (state) => state.currentItem
  },
  actions: {
    resetState() {
      this.user.id = undefined
    },
    getTableItems() {
      return this.tableData
    },
    showDetails(item) {
      this.currentItem = item
      console.log('showDetails', item)
    }
  }
})
