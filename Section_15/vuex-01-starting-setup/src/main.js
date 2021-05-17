import { createApp } from 'vue';
import { createStore } from 'vuex'

import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0,
            isUserLoggedIn: false
        };
    },
    mutations: {
        increment(state) {
            state.counter++;
            // NOTE: Not Allowed by Vuex!!! but it will work
            // setTimeout(() => { 
            //     state.counter++;
            // }, 2000);
        },
        increase(state, payload) {
            //state.counter += payload;
            state.counter += payload.value;
        },
        setAuth(state, payload) {
            state.isUserLoggedIn = payload.isAuth;
        }        
    },
    actions: {
        // 1. It is allowed to have the same name actions and mutations        
        increment(context) {
            // Actions unlike mutations are allowed to run async code
            setTimeout(() => {
                context.commit('increment');
            }, 2000);
        },
        increase(context, payload) {
            // Actions unlike mutations are allowed to run async code
            setTimeout(() => {
                context.commit('increase', payload);
            }, 2000);
        },
        login(context) {
            context.commit('setAuth', { isAuth: true });
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false });
        }
    },
    getters: {
        // finalCounter(state, getters){
        finalCounter(state) {
            return state.counter * 3;
        },
        normalizedCounter(_, getters) {
            const finalCounter = getters.finalCounter;
            if (finalCounter < 0) {
                return 0;
            }
            if (finalCounter > 100) {
                return 100;
            }
            return finalCounter;
        },
        userIsAuthenticated(state){
            return state.isUserLoggedIn;
        }
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
