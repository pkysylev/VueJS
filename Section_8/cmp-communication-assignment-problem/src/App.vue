<template>
  <user-data @set-data="setUserData"></user-data>
  <active-user v-for="user in users" :key="user.id" v-bind="user"></active-user>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    setUserData(userData) {
        userData.id = new Date().toISOString();
      this.users.unshift(userData);
    },
  },
};
</script>

<style>
html {
  font-family: "sans-serif";
}

section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>