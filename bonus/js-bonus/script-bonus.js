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
        for(let i = 0; i < 100; i++) {
            axios.get('https://jsonplaceholder.typicode.com/posts').then((resp) =>{
                let obj = {
                    body: resp.data[i].body,
                    id: resp.data[i].id,
                    title: resp.data[i].title,
                    userId: resp.data[i].userId
                };
                console.log(obj);
                this.ArrayObjs.push(obj);
            });
        };
    }
}).mount('#app');