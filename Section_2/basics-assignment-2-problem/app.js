Vue.createApp({
    data(){
        return {
            inputValueOne: '',
            inputValueTwo: '',
            finalInputValueTwo: ''
        }
    },
    methods: {
        showAlert(){
            alert('Button is pressed')
        },
        setInputValueOne(event){
            this.inputValueOne = event.target.value;
        },
        setInputValueTwo(event){
            this.inputValueTwo = event.target.value;
        },
        getFinalInputValueTwo(){
            this.finalInputValueTwo = this.inputValueTwo;
        }
    }
}).mount('#assignment')