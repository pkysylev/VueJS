<template>
  <form @submit.prevent="addNewFriend">
    <div>
      <label>Name: </label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label>Phone: </label>
      <input type="tel" v-model="phone" />
    </div>
    <div>
      <label>Email: </label>
      <input type="email" v-model="email" />
    </div>
    <div>
      <button>Add a New Friend</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-friend"],
  data() {
    return {
      name: "",
      phone: "",
      email: ""
    };
  },
  methods: {
    addNewFriend() {
      this.$emit("add-friend", {
        id: new Date().toISOString(),
        name: this.name,
        phone: this.phone,
        email: this.email,
        isFavorite: false,
      });
      this.name = '';
      this.phone = '';
      this.email = '';
    },
  },
};
</script>