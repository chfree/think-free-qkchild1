import Router from 'vue-router'

import '../public-path'			// 重点3： 引入public-path文件

let prefix = ''
// 判断是 qiankun 环境则增加路由前缀
if(window.__POWERED_BY_QIANKUN__){
    prefix = '/authority'
}

export default new Router({
    // base: window.__POWERED_BY_QIANKUN__ ? '/#/system/vue/' : '/',			// 重点4
    // mode: 'history',			// 重点5
    routes: [
        { path: prefix + '/', redirect: prefix + '/child'},
        { path: prefix + '/child', component: () => import('../components/child') },
        { path: prefix + '/systemModule/superManage/menu', component: ()=>import('../components/menu')}]
})