import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import page from '@/components/pages/page'
import child1 from '@/components/pages/child1'
import child2 from '@/components/pages/child2'
import child3 from '@/components/pages/child3'
import Menu from '@/components/pages/menu'



Vue.use(Router)

export default new Router({
  // mode : 'history', //把連結的預設＃拿掉，需要前後端配合
  routes: [
    {
      path: '/index',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/page',
      // name: 'HelloWorld', //因為有預設第一個子層，所以父層就不需在添加
      // component: page,

      //多個元件
      components:{
        default: page,
        menu: Menu //自定義router-view名稱
      },
      // 子層
      children:[
        {
          //留空預設就會是這頁
          path: '',
          name: 'child1',
          component: child1
        },
        {
          path: 'child2',
          name: 'child2',
          component: child2
        },
        {
          path: 'child3',
          name: 'child3',
          component: child3
        },
      ]
    }
  ]
})
