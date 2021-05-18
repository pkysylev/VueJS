export default {
    setAuth(state, payload) {
        state.isUserLoggedIn = payload.isAuth;
    }
}