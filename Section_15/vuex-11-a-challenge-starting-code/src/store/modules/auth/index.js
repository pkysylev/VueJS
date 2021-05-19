export default {
    namespaced: true,
    state() {
        return {
            isUserLoggedIn: false
        };
    },
    mutations: {
        setAuth(state, payload) {
            state.isUserLoggedIn = payload.isAuth;
        }
    },
    actions: {
        login(context) {
            context.commit('setAuth', { isAuth: true });
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false });
        }
    },
    getters: {
        userIsAuthenticated(state) {
            return state.isUserLoggedIn;
        }
    }
}