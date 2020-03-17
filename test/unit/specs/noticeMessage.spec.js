import Vue from 'vue'
import noticeMessage from '@/packages/components/noticeMessage/noticeMessage'

function propsRender (comps, props) {
  const Constructor = Vue.extend(comps)
  const vm = new Constructor({ propsData: props }).$mount()
  return vm.$el.querySelector('.red').textContent
}
describe('noticeMessage textContent', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(noticeMessage)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.blue').textContent)
      .to.equal('default text')
  })
  it('has a created hook', () => {
    expect(typeof noticeMessage.created).to.equal('function')
  })
  it('prop render', () => {
    expect(propsRender(noticeMessage, {
      text: 'propContent'
    })).to.equal('propContent')
  })
})
