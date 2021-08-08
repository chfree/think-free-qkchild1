import Router from 'vue-router'
import '../public-path'			// 重点3： 引入public-path文件
export default new Router({
    base: window.__POWERED_BY_QIANKUN__ ? '/vue' : '/',			// 重点4
    mode: 'history',			// 重点5
    routes: [
        { path:'/', redirect: '/child'},
        { path: '/child', component: ()=>import('../components/child')}]
})