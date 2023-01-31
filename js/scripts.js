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

                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {

                    console.log(response);

                    console.log(response.data.response);

                    this.arrayEmails.push(response.data.response);

                    console.log(this.arrayEmails)

                });

            };

        }

    },

}).mount('#app')