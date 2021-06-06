import { mount } from '@vue/test-utils'
import ContentsLoader from './ContentsLoader.vue'

describe('ContentsLoader', () => {

  const wrapperFactory = (props: { line: number }) => {
    return mount(ContentsLoader, {
      props
    })
  }

  test('One loader will be displayed.', () => {
    const wrapper = mount(ContentsLoader)
    
    expect(wrapper.findAll('[data-test="long-loader"]').length).toBe(1)
    expect(wrapper.findAll('[data-test="helf-loader"]').length).toBe(0)
  })

  test('One loader and one half loader will be displayed.', () => {
    const wrapper = wrapperFactory({ line: 2 })
    
    expect(wrapper.findAll('[data-test="long-loader"]').length).toBe(1)
    expect(wrapper.findAll('[data-test="half-loader"]').length).toBe(1)
  })

  test('There is always one half-loader displayed.', () => {
    let wrapper = wrapperFactory({ line: 5 })
    expect(wrapper.findAll('[data-test="long-loader"]').length).toBe(4)
    expect(wrapper.findAll('[data-test="half-loader"]').length).toBe(1)

    wrapper = wrapperFactory({ line: 3 })
    expect(wrapper.findAll('[data-test="long-loader"]').length).toBe(2)
    expect(wrapper.findAll('[data-test="half-loader"]').length).toBe(1)
  })
})
