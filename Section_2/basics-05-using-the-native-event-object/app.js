const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullName() {
      console.log('aaaa');
      if (!this.name) {
        return '';
      }
      return this.name + ' ' + 'AAAAA'
    }
  },
  methods: {
    outputFullName() {
      console.log('aaa');
      if (!this.name) {
        return '';
      }
      return this.name + ' ' + 'AAAAA'
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
