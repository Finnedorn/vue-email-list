const {createApp} = Vue;

const miaApp = createApp({
    data() {
        return {
            MakeUp: [],
            params: [

            ],
            apiUrl: 'http://makeup-api.herokuapp.com/?',
            product:

        }
    },
    methods: {
    },
    mounted() {
        for(let i = 0; i < 10; i++) {
            axios.get().then((resp) =>{
                this.MakeUp.push(resp.data[i]);
            });
        };
    }
}).mount('#app');