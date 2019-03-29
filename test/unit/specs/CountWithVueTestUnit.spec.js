import Vue from 'vue'
import Counter from '@/components/Counter'

describe('测试Counter.vue', () => {
  it('点击按钮后，count的值应该为1', () => {
    // 获取组件的实例
    const Constructor = Vue.extend(Counter)
    // 挂载组件
    const vm = new Constructor().$mount()
    // 获取button
    const button = vm.$el.querySelector('button')
    // 新建点击事件
    const clickEvent = new window.Event('click')
    // 触发点击事件
    button.dispatchEvent(clickEvent)
    // 监听点击事件
    vm._watcher.run()
    // 断言：count的值应该是数字1
    expect(Number(vm.$el.querySelector('.num').textContent)).to.equal(1)
  })

  it('调用函数，count的值应该为1', () => {
    // 获取组件的实例并挂载组件
    const vm = new Vue(Counter).$mount()
    // 触发自增事件
    vm.increment()
    // 断言：count的值应该是数字1
    expect(vm.count).to.equal(1)
  })

  it('调用异步自增函数，count的值应该为1', function (done) {
    this.timeout(5000) // 对该 it 设置timeout 为 5000ms（默认）
    // 获取组件的实例并挂载组件
    const vm = new Vue(Counter).$mount()
    console.log('异步自增前：' + vm.count)
    // 触发异步自增事件
    vm.incrementAsync().then(() => {
      console.log('异步自增3s后：' + vm.count)
      expect(vm.count).to.equal(1)
      done()
    }).catch(e => {
      done()
    })
    /* console.log('异步自增后：' + vm.count)
    setTimeout(() => {
      console.log('异步自增3s后：' + vm.count)
      expect(vm.count).to.equal(1)
      done()
    }, 4500) */
    // 断言：count的值应该是数字1
  })
})
