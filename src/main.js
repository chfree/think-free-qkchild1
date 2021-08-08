import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import router from "./router"

Vue.config.productionTip = false

Vue.use(Router)

// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app')

let instance = null;
function render( props = {}) {
    const { container } = props;
    instance = new Vue({
        router,
        render: h => h(App),
    }).$mount(container ? container.querySelector('#app'): '#app');  // 为了避免根id#app与其他DOM冲突，需要限制查找范围
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

//--------- 生命周期函数------------//
export async function bootstrap() {
    console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
    console.log('[vue] props from main framework', props);
    render(props);
}
export async function unmount() {
    instance.$destroy();
    instance.$el.innerHTML = '';
    instance = null;
}