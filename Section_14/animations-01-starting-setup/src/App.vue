<template>
<div class="container">
  <users-list>
    
  </users-list>
</div>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="aninateBlock">Animate</button>
  </div>
  <div class="container">
    <!-- Providing some custom enter classes -->
    <!-- <transition
      enter-to-class="some-enter-to-class"
      enter-active-class="some-enter-active-class"
    > -->
    <transition
      :css="false"
      @before-enter="paraBeforeEnter"
      @before-leave="paraBeforeLeave"
      @enter="paraEnter"
      @afterEnter="paraAfterEnter"
      @leave="paraLeave"
      @afterLeave="paraAfterLeave"
      @enter-cancelled="paraEnterCancelled"
      @leave-cancelled="paraLeaveCancelled"
    >
      <!-- Defining custom prefix -->
      <p v-if="paraIsVisible">This is only sometimes visible...</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
import UsersList from './components/UsersList.vue';

export default {
  components: {
    UsersList,
  },
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    aninateBlock() {
      this.animatedBlock = !this.animatedBlock;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    paraBeforeEnter(el) {
      console.log('beforeEnter');
      console.log(el);

      el.style.opacity = 0;
    },
    paraBeforeLeave(el) {
      console.log('beforeLeave');
      console.log(el);

      el.style.opacity = 1;
    },
    paraEnter(el, done) {
      console.log('enter');
      console.log(el);

      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    paraAfterEnter(el) {
      console.log('afterEnter');
      console.log(el);
    },
    paraLeave(el, done) {
      console.log('leave');
      console.log(el);

      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    paraAfterLeave(el) {
      console.log('afterLeave');
      console.log(el);
    },
    paraEnterCancelled(el) {
      console.log('paraEnterCancelled');
      console.log(el);

      clearInterval(this.enterInterval);
    },
    paraLeaveCancelled(el) {
      console.log('paraLeaveCancelled');
      console.log(el);
      clearInterval(this.leaveInterval);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  animation: slide-fade 1s ease-out forwards;
}

.fade-button-enter-from,
.fade-button-leave-from {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave {
  opacity: 1;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>