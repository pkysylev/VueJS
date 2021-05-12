<template>
  <section>
    <form @submit.prevent="submitData">
      <input type="text" v-model="enteredName" placeholder="Enter UserName" />
      <input type="text" v-model="enteredAge" placeholder="Enter Age" />
      <button>Set User Data</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["set-data"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("set-data", { userName: this.enteredName, age: +this.enteredAge });
    },
  },
};
</script>