<template>
  <button @click="increment">Increment</button>
  <button @click="increase({ value: 11 })">Increase 11</button>  
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne(){
    //     this.$store.dispatch('increment');
    // }

    //...mapActions(['increment', 'increase'])
    ...mapActions({
      increment: 'increment',
      increase: 'increase',
    }),
  },
};
</script>