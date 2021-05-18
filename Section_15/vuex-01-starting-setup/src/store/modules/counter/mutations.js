export default {
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
    }
}