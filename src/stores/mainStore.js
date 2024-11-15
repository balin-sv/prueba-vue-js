import { defineStore } from 'pinia'
import constituensList from '@/api/constituyentes/constituensList.json'

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      tableData: constituensList,

      privileges: {
        clients: [],
        areas: [],
        companies: []
      },
      environment: {
        userGroups: [],
        countries: []
      }
    }
  },
  getters: {},
  actions: {
    resetState() {
      this.user.id = undefined
    },
    getTableItems() {
      console.log(this.tableData)
      return this.tableData
    }
  }
})
