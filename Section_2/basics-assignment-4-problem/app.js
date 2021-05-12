Vue.createApp({
    data() {
        return {
            inputClassName: "",
            inputBackgroundColor: "",
            showParagraph: false
        }
    },
    methods: {
        toggleParagraph() {
            this.showParagraph = !this.showParagraph;
        }
    },
    computed: {
        showOrHide() {
            return this.showParagraph ? "visible" : "hidden";
        },
        userClass() {
            let result = "";
            switch (this.inputClassName) {
                case "user1":
                case "user2":{
                    result = this.inputClassName;
                    break;
                }            
                default:
                    break;
            }
            return result;
        }
    }
}).mount('#assignment');