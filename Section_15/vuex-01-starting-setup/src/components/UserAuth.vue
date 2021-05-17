<template>
  <button @click="login" v-if="!userIsAuthenticated">Login</button>
  <button @click="logout" v-else>Logout</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    methods: {
        ...mapActions(['login', 'logout']),        
        login(){
            this.$store.dispatch('login');
        },
        logout(){
            this.$store.dispatch('logout');
        }
    },
    computed: {
        ...mapGetters(['userIsAuthenticated']),
    }
};
</script>