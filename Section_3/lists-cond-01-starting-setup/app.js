const app = Vue.createApp({
  data() {
    return {
      goal: '',
      goals: [],
      //persons: [{name: 'Pavlo', age: 33}, {name: 'Olena', age: 34}]
    };
  },
  methods: {
    addGoal() {
      if (this.goal) {
        this.goals.push(this.goal);
        this.goal = '';
      }
    },
    removeGoal(idx){
      console.log(idx);
      this.goals.splice(idx, 1);
    },
    showGoals() {
      return this.goals.length > 0;
    }
  }
});

app.mount('#user-goals');
