Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },
    watch: {
        result() {
            var self = this;
            setTimeout(function () {
                self.counter = 0;
            }, 5000)
        }

    },
    computed: {
        result() {
            if (this.counter < 37) {
                return 'Not there yet';
            } else {
                return 'Too much!';
            }
        }
    },
    methods: {
        increaseCounter(number) {
            this.counter += number;
        }
    }
}).mount('#assignment');