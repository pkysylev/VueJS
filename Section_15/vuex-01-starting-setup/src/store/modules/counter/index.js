import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'

export default {
    namespaced: true,
    state() {
        return {
            counter: 0
        };
    },
    mutations: mutations, 
    actions: actions,
    getters: getters
}