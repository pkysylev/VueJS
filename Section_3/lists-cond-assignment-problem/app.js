Vue.createApp({
    data() {
        return {
            task: '',
            tasks: [],
            showTasksList: true
        };
    },
    computed: {
        buttonCaption() {
            return `${this.showTasksList ? "Hide" : "Show"} List` ;
        }
    },
    methods: {
        addTask() {
            if (this.task) {
                this.tasks.push(this.task);
                this.task = '';
            }
        },
        toggleTaskList() {
            this.showTasksList = !this.showTasksList;
        }
    }
}).mount("#assignment");