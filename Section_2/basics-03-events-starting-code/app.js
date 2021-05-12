const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      console.log('The form has been submitted!');
    },
    setName(event) {
      this.name = event.target.value;
    },
    add() {
      this.counter++;
    },
    reduce() {
      return this.counter--;
    }
  }
});

app.mount('#events');
