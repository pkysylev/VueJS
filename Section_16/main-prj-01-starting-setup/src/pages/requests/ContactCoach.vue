<template>
  <base-dialog :show="!!error" title="An error occured!" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="email">Your E-mail</label>
      <input type="email" id="email" v-model.trim="email" />
    </div>
    <div class="form-control">
      <label for="message">Message</label>
      <textarea rows="5" id="message" v-model.trim="message"></textarea>
    </div>
    <p class="errors" v-if="!formIsValid">
      Please enter a valid email and non-empty message.
    </p>
    <div class="actions">
      <base-button>Send Message</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      error: null,
      email: '',
      message: '',
      formIsValid: true,
    };
  },
  methods: {
    async submitForm() {
      this.isLoading = true;
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.message === ''
      ) {
        this.formIsValid = false;
        this.isLoading = false;
        return;
      }
      try {
        await this.$store.dispatch('requests/contactCoach', {
          coachId: this.$route.params.id,
          email: this.email,
          message: this.message,
        });        
        this.$router.replace('/coaches');
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;  
    },
    handleError(){
      this.error = null;
    }
  },
};
</script>


<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>