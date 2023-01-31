/*

    API: https://flynn.boolean.careers/exercises/api/random/mail

*/

const { createApp } = Vue;

createApp({

    data() {

        return {

            arrayEmails: [],

        }

    },

    methods: {

        generateEmail() {

            for (let i = 1; i <= 10; i++) {

                if (this.arrayEmails <= 10) {

                    axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
    
                        console.log(response);
    
                        console.log(i, response.data.response);
    
                        this.arrayEmails.push(response.data.response);

                        console.log(this.arrayEmails)
    
                    });

                };

            };

        }

    },

    mounted() {

        // this.generateEmail();

    }

}).mount('#app')