import { setActivePinia, createPinia } from 'pinia'
import { useMainStore } from '@/stores/mainStore'
import { describe, it, expect, beforeEach } from 'vitest'

describe('MainStore', () => {
  let mainStore

  beforeEach(() => {
    setActivePinia(createPinia())
    mainStore = useMainStore()
  })

  it('should initialize the default state', () => {
    expect(mainStore.tableData).toEqual(expect.any(Object))
    expect(mainStore.currentItem).toBeNull()
  })

  it('should return table data using getTableItems', () => {
    const tableItems = mainStore.getTableItems()
    expect(tableItems).toEqual(mainStore.tableData)
  })

  it('should update currentItem using showDetails', () => {
    const mockItem = { name: 'Test Item', value: 123 }

    mainStore.showDetails(mockItem)
    expect(mainStore.currentItem).toEqual(mockItem)
  })
})
