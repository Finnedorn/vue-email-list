const {createApp} = Vue;

const miaApp = createApp({
    data() {
        return {
            ArrayObjs: []
        }
    },
    methods: {
    },
    mounted() {
        for(let i = 0; i < 10; i++) {
            axios.get('https://jsonplaceholder.typicode.com/posts').then((resp) =>{
                let obj = {
                    body: resp.data.body,
                    id: resp.data.id,
                    title: resp.data.title,
                    userId: resp.data.userId
                };
                console.log(obj);
                this.ArrayObjs.push(obj);
            });
        };
    }
}).mount('#app');