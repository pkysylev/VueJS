<template>
  <base-container title="Vuex" v-if="userIsAuthenticated">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="increase">Increase 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  methods: {    
    increase() {
      // MUTATIONS
      // this.$store.commit('increase', 10);
      // this.$store.commit('increase', {value: 10});
      // this.$store.commit({
      //   type: 'increase',
      //   value: 10,
      // });

      // ACTIONS
      // this.$store.dispatch('increase', 10);
      // this.$store.dispatch('increase', {value: 10});
      this.$store.dispatch({
        type: 'numbers/increase', // the method name from the vuex actions
        value: 10,
      });
    },    
  },
  computed: {
      ...mapGetters('auth', ['userIsAuthenticated']),
    }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>