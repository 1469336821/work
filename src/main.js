import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// 引入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import axios from 'axios'

// 图标
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
installElementPlus(app)

//服务器前缀设置
const baseURL = 'http://localhost:5555'
//配置全局axios
axios.defaults.baseURL = baseURL //配置前缀url
axios.defaults.withCredentials = true //携带cookie
app.config.globalProperties.$axios = axios //添加到vue实例
app.use(store).use(router).mixin({
    data() {
        return { baseURL }
    }
}).mount('#app')


