<template>
  <section>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
</style>