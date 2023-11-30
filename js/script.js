//! Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Enjoy the concert!',
            picture: 'img/1523373750053.jpeg',
            otherMessage : 'Welcome back anytime',
            myClassH1: 'red',
            myClassH2: 'margin-h2'

            // RICORDATI DI METTERE LA VIRGOLA ALLA FINE DI OGNI COSA 
        }
    },
}).mount('#app');