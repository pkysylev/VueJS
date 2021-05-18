import { createStore } from 'vuex'

import rootMutations from './mutations.js'
import rootGetters from './getters.js'
import rootActions from './actions.js'

import counterModule from './modules/counter/index.js'
import userAuthModule from './modules/auth/index.js'

const store = createStore({
    modules: {
        numbers: counterModule,
        auth: userAuthModule
    },
    state() {

    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
});

export default store;