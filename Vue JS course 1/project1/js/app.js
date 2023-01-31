const DEFAULT_STATE = {
    state: true,
    inputName: '',
    names: [],
    error: '',
    result: '',
    showError: false,
}
const app = Vue.createApp({
    data() {
        return {
            ...DEFAULT_STATE 
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
            this.generateResult(); 
            this.state = false
        },
        generateResult() {
            let rand = this.getRandomName()
            if(this.result !== '') {
                while(rand === this.result) {
                    rand = this.getRandomName()
                }
            }
            this.result = rand
        },
        getRandomName() {
            return this.names[Math.floor(Math.random() * this.names.length)];
        },
        getNewresult() {
            this.generateResult()
        },
        resetApp() {
            this.state = true
            this.inputName = ''
            this.names = []
            this.error = ''
            this.result = ''
            this.showError = false
        }
    },
}).mount('#app')