const {createApp} = Vue;

const miaApp = createApp({
    data() {
        return {
            rngMails: []
        }
    },
    methods: {
    },
    mounted() {
        for(let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) =>{
                this.rngMails.push(resp.data.response);
            });
        };
    }
}).mount('#app');