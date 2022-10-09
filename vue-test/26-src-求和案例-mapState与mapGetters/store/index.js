// 该文件用于创建 Vuex 中最为核心的 store

// 引入 vue
import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex';

Vue.use(Vuex)

// 准备 actions —— 用于响应组件中的动作
const actions = {
    incrementOdd(context, value) {
        console.log("actions 中 incrementOdd 被调用了", context, value);
        if (context.state.sum % 2) {
            context.commit("increment", value)
        }
    },

    incrementWait(context, value) {
        console.log("actions 中 incrementWait 被调用了", context, value);
        setTimeout(() => {
            context.commit("increment", value)
        }, 500);
    }
}

// 准备 mutatios —— 用于操作数据（state）
const mutations = {
    increment(state, value) {
        console.log("mutations 中 increment 被调用了", state, value);
        state.sum += value
    },
    decrement(state, value) {
        console.log("mutations 中 decrement 被调用了", state, value);
        state.sum -= value
    },
}

// 准备 state —— 用于存储数据
const state = {
    sum: 0,
    school: '北京大学',
    subject: 'Vue'
}

// 准备 getters —— 用于对 state 中的数据进行加工
const getters = {
    bigSum() {
        return state.sum * 10;
    }
}

// 创建并暴露 store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})