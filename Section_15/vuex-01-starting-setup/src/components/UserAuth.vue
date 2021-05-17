<template>
  <button @click="login" v-if="!userIsAuthenticated">Login</button>
  <button @click="logout" v-else>Logout</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    methods: {
        ...mapActions('auth', ['login', 'logout']),        
        login(){
            this.$store.dispatch('auth/login');
        },
        logout(){
            this.$store.dispatch('auth/logout');
        }
    },
    computed: {
        ...mapGetters('auth', ['userIsAuthenticated']),
    }
};
</script>