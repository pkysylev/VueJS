import { createStore } from 'vuex'

import userAuthModule from './modules/auth/index.js'
import productsModule from './modules/products.js'
import cartModule from './modules/cart.js'

const store = createStore({
    modules: {
        auth: userAuthModule,
        prods: productsModule,
        cart: cartModule
    },
    state() {

    },
    mutations: {},
    actions: {},
    getters: {}
});

export default store;