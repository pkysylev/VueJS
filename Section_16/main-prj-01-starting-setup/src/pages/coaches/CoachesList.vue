<template>
  <section>FILTER</section>
  <section>
    <base-card>
      <div class="controls">
        <!-- <button>Refresh</button> -->
        <!-- <router-link to="/register">Register as Coach</router-link> -->
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register"
          >Register as Coach</base-button
        >
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in coaches"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        ></coach-item>
      </ul>
      <h3 v-else>No coaches found</h3>
    </base-card>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import CoachItem from '../../components/coaches/CoachItem.vue';
import BaseButton from '../../components/ui/BaseButton.vue';

export default {
  components: {
    CoachItem,
    BaseButton,
  },
  computed: {
    ...mapGetters('coaches', ['coaches']),
    ...mapGetters('coaches', ['hasCoaches']),
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>