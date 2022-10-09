// 该文件用于创建 Vuex 中最为核心的 store

// 引入 vue
import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex';

import count from './count'
import person from './person';

Vue.use(Vuex)

// 创建并暴露 store
export default new Vuex.Store({
    modules: {
        countAbout: count,
        personAbout: person
    }
})