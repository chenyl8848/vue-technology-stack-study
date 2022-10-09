import axios from "axios";
import {
    nanoid
} from "nanoid";

export default {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            console.log("actions 中 addPersonWang 被调用了", context, value);
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('添加的人必须姓王!')
            }
        },
        addPersonServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(response => {
                context.commit('ADD_PERSON', {
                    id: nanoid(),
                    name: response.data
                })
            }, error => {
                console.log(error.message);
            })
        }
    },

    mutations: {
        ADD_PERSON(state, value) {
            console.log("mutations 中 ADD_PERSON 被调用了", state, value);
            state.personList.unshift(value)
        }
    },

    state: {
        personList: [{
            id: "0001",
            name: "张三"
        }]
    },

    getters: {

    }
}