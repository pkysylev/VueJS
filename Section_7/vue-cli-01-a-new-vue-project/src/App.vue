<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <new-friend @add-friend="addNewFriend"> </new-friend>
    <ul>
      <friend-contact
        v-for="friend in friendContacts"
        :key="friend.id"
        v-bind="friend"
        @toggle-favorite="toggleFavoriteStatus"
        @delete-friend="deleteFriend"
      ></friend-contact>
      <!-- <friend-contact
        v-for="friend in friendContacts"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
      ></friend-contact> -->
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friendContacts: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          isFavorite: true,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 6543 210",
          email: "manuel@localhost.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      const filteredFriend = this.friendContacts.find(
        (friend) => friend.id === friendId
      );
      filteredFriend.isFavorite = !filteredFriend.isFavorite;
    },
    addNewFriend(newFriend) {
      this.friendContacts.push(newFriend);
    },
    deleteFriend(friendId) {
      this.friendContacts = this.friendContacts.filter(
        (friend) => friend.id !== friendId
      );
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
</style>