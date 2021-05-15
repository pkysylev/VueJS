<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    confirmInput() {
      // do something
      this.$router.push('/teams');
      //this.$router.forward() - read an official documentation
    },
    saveChanges() {
      this.changesSaved = true;
    },
  },
  beforeRouteLeave(to, from, next) {
    console.log('UsersList Component beforeRouteLeave');
    console.log(to, from);
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm('Are you sure? You got unsaved changes! \r\n You have to click Save Changes first!');
      next(userWantsToLeave);
    }
  },
  unmounted() {
    // Problem is that this runs after the hooks, after the navigation has been confirmed
    // and this gives us no way of canceling the navigation
    console.log('unmounted');
  },
  // beforeRouteEnter(to, from, next){
  //   console.log('UsersList Component beforeRouteEnter');
  //   console.log(to, from);
  //   next();
  // }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>