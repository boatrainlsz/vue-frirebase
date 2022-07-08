const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            toogleText: 'Hide Books',
            title: 'shit',
            title: 'shit',
            age: 14,
        }
    },
    methods: {
        toogleShowBooks() {
            this.showBooks = !this.showBooks
            if (!this.showBooks) {
                this.toogleText = 'Show Books'
            } else {
                this.toogleText = 'Hide Books'
            }
        }
    }
    // template: '<h2>I am the template</h2>'
})

app.mount('#app')