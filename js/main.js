new Vue({
    el: "#app",
    components: {
    },
    async created() {
        try {
            const response = await axios.get(`https://fcctop100.herokuapp.com/api/fccusers/top/recent`)
            this.users = response.data;
        } catch(e) {
            alert(e);
        }
    },
    data() {
        return {
            fields: [
                { key: 'image', label: 'Image' },
                { key: 'username', sortable: false },
                { key: 'recent', sortable: true },
                { key: 'alltime', sortable: true }
            ],
            users: [],
        };
    },
    computed: {
    },
    methods: {
    }
});