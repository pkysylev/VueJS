
Vue.createApp({
    data(){
        return {
            name: 'Pavlo',
            age: 33,
            imageUrl: 'https://pngimg.com/uploads/free/free_PNG90783.png'
        }
    },
    methods: {
        randomNumber() {
            if(Math.random() < 0.5){
                return '0'
            }
            else{
                return '1';
            }
        }
    }
}).mount('#assignment');