// 该文件用于创建 Vuex 中最为核心的 store

// 引入 vue
import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex';

Vue.use(Vuex)

// 准备 actions —— 用于响应组件中的动作
const actions = {
    increment(context, value) {
        console.log('actions 中 increment 被调用了', context, value)
        context.commit('increment', value)
    },
    decrement(context, value) {
        console.log('actions 中 decrement 被调用了', context, value)
        context.commit('decrement', value)
    },
    incrementOdd(context, value) {
        console.log("actions 中 incrementOdd 被调用了", context, value);
        if (state.sum % 2) {
            context.commit("incrementOdd", value)
        }
    },

    incrementWait(context, value) {
        console.log("actions 中 incrementWait 被调用了", context, value);
        setTimeout(() => {
            context.commit("incrementWait", value)
        }, 500);
    }
}

// 准备 mutatios —— 用于操作数据（state）
const mutations = {
    increment(context, value) {
        console.log("mutations 中 increment 被调用了", context, value);
        state.sum += value
    },
    decrement(context, value) {
        console.log("mutations 中 decrement 被调用了", context, value);
        state.sum -= value
    },
    incrementOdd(context, value) {
        console.log("mutations 中 incrementOdd 被调用了", context, value);
        state.sum += value
    },
    incrementWait(context, value) {
        console.log("mutations 中 incrementWait 被调用了", context, value);
        state.sum += value
    }

}

// 准备 state —— 用于存储数据
const state = {
    sum: 0
}

// 创建并暴露 store
export default new Vuex.Store({
    actions,
    mutations,
    state
})