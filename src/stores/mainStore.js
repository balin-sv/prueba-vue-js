import { defineStore } from 'pinia'
import constituensList from '@/api/constituyentes/constituensList.json'

export const useMainStore = defineStore('main', {
  state: () => ({
    tableData: constituensList,
    currentItem: null
  }),
  actions: {
    resetState() {
      this.user.id = undefined
    },
    getTableItems() {
      return this.tableData
    },
    showDetails(item) {
      this.currentItem = item
    }
  }
})
