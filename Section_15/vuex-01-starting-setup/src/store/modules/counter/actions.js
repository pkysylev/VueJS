export default {
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
    }
}