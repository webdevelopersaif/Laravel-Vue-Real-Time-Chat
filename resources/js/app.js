/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import axios from 'axios';

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */
const app = createApp({
    data() {
        return {
            messages: [] // Store chat messages here
        };
    },
    created() {
        // console.log("test");debugger
        this.fetchMessages(); // Fetch messages on component creation
    },
    methods: {
        fetchMessages() {
            // Fetch all chat messages from the backend
            axios.get('/messages').then(response => {
                console.log("get_messages", response.data);
                this.messages = response.data; // Store the messages in the array
            });
        },
        addMessage(message) {
            // Add the new message to the array
            this.messages.push(message);

            // Post the message to the backend
            axios.post('/messages', message).then(response => {
                console.log(response.data);
            });
        }
    }
});

// import ExampleComponent from './components/ExampleComponent.vue';
// app.component('example-component', ExampleComponent);

import ChatMessages from './components/ChatMessages.vue';
app.component('chat-messages', ChatMessages);

import ChatForm from './components/ChatForm.vue';
app.component('chat-form', ChatForm);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.mount('#app');