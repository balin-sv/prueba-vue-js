import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { useMainStore } from '@/stores/mainStore'
import SummaryComponent from '@/components/SummaryComponent.vue'
import { describe, it, expect, beforeEach } from 'vitest'

describe('SummaryComponent', () => {
  let mainStore

  beforeEach(() => {
    setActivePinia(createPinia())
    mainStore = useMainStore()
  })

  it('should render default placeholder values when currentItem is null', () => {
    const wrapper = mount(SummaryComponent)
    expect(wrapper.text()).toContain('Cotizacion')
    expect(wrapper.text()).toContain('-')
    expect(wrapper.text()).toContain('NOMBRE')
    expect(wrapper.text()).toContain('-')
    expect(wrapper.text()).toContain('DIA')
    expect(wrapper.text()).toContain('-')
    expect(wrapper.text()).toContain('MES')
    expect(wrapper.text()).toContain('-')
    expect(wrapper.text()).toContain('12 MESES')
    expect(wrapper.text()).toContain('-')
  })

  it('should render correct data when currentItem is set', async () => {
    const wrapper = mount(SummaryComponent)

    mainStore.currentItem = {
      datetimeLastPrice: '2024-11-14 10:00:00',
      name: 'Test Name',
      pctDay: '1.23%',
      pct30D: '3.45%',
      pct1Y: '12.34%'
    }

    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Cotizacion')
    expect(wrapper.text()).toContain('2024-11-14 10:00:00')
    expect(wrapper.text()).toContain('NOMBRE')
    expect(wrapper.text()).toContain('Test Name')
    expect(wrapper.text()).toContain('DIA')
    expect(wrapper.text()).toContain('1.23%')
    expect(wrapper.text()).toContain('MES')
    expect(wrapper.text()).toContain('3.45%')
    expect(wrapper.text()).toContain('12 MESES')
    expect(wrapper.text()).toContain('12.34%')
  })

  it('should reactively update when currentItem changes', async () => {
    const wrapper = mount(SummaryComponent)

    mainStore.currentItem = {
      datetimeLastPrice: '2024-11-14 10:00:00',
      name: 'Test Name',
      pctDay: '1.23%',
      pct30D: '3.45%',
      pct1Y: '12.34%'
    }

    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Test Name')

    mainStore.currentItem = {
      datetimeLastPrice: '2024-11-15 11:00:00',
      name: 'Updated Name',
      pctDay: '2.34%',
      pct30D: '4.56%',
      pct1Y: '13.45%'
    }

    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Updated Name')
    expect(wrapper.text()).toContain('2024-11-15 11:00:00')
    expect(wrapper.text()).toContain('2.34%')
    expect(wrapper.text()).toContain('4.56%')
    expect(wrapper.text()).toContain('13.45%')
  })
})
