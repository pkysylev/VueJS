<template>
  <base-card>
    <form @submit.prevent="submit">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="title" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          ref="description"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="link" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
  <error-alert
    v-if="showErrorMessage"
    title="Invalid Input"
    @close="confirmError"
  >
    <template #default>
      <p>Unfortunately, at least one input is invalid.</p>
      <p>
        Please check all inputs and make sure you entered at least a few
        characters into each input field.
      </p>
    </template>
    <template #actions>
      <base-button @click="confirmError">Okay</base-button>
    </template>
  </error-alert>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseCard from '../UI/BaseCard.vue';
export default {
  inject: ['addResource'],
  components: { BaseCard, BaseButton },
  data() {
    return {
      showErrorMessage: false,
    };
  },
  methods: {
    submit() {
      const resource = {
        id: new Date().toISOString(),
        title: this.$refs.title.value,
        description: this.$refs.description.value,
        link: this.$refs.link.value,
      };

      if (
        resource.title.trim() !== '' &&
        resource.description.trim() !== '' &&
        resource.link.trim() !== ''
      ) {
        this.addResource(resource);
        this.clearEnteredData();
      } else {
        this.showErrorMessage = true;
      }
    },
    clearEnteredData() {
      this.$refs.title.value = '';
      this.$refs.description.value = '';
      this.$refs.link.value = '';
    },
    confirmError() {
      this.showErrorMessage = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>