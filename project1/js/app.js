const app = Vue.createApp({
    data() {
        return {
            state: true,
            inputName: '',
            names: [],
            error: '',
            showError: false,
        }
    },
    computed: {
        isReady() {
            return this.names.length > 1
        }
    },
    methods: {
        addName() {
            const userName = this.inputName
            if (this.validate(userName)) {
                this.names.push(userName)
                this.inputName = ''
                console.log(this.names)
            } else {
                this.showError = true
                console.log('error')
            }
        },
        validate(value) {
            this.error = ''
            if (value === '') {
                this.error = 'Sorry, no empty name!'
                return false;
            }
            if (this.names.includes(value)) {
                this.error = `Sorry, ${value} is already in list!`
                return false;
            }
            return true;
        },
        removeName(index) {
            this.names.splice(index, 1)
        },
        showResults() {
            this.state = false
        }
    },
}).mount('#app')