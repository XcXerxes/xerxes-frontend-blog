import Vue from 'vue'
import tabs from '@/components/tabs'
var expect = require('chai').expect

// 挂载元素并返回已渲染的文本的工具函数
function getRenderedText (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData: propsData }).$mount()
  return vm.$el.textContent
}
describe('tabs', () => {
  it('测试id', () => {
    expect(getRenderedText(tabs, {
      activeId: '03deed20-83da-11e7-a1e4-0bfdd96d4c88',
      tabs: [
        {
          id: '03deed20-83da-11e7-a1e4-0bfdd96d4c88',
          cate_name: 'java'
        },
        {
          id: '1231',
          cate_name: 'php'
        }
      ]
    })).to.equal('03deed20-83da-11e7-a1e4-0bfdd96d4c88')
    expect(getRenderedText(tabs, {
      activeId: 'all_001'
    })).to.equal('all_001')
  })
})


