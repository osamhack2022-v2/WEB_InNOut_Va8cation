import { createApp } from 'vue'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import App from './App.vue'
import router from "./router/router"



var firebaseConfig = {
    apiKey: "AIzaSyD5PQPd-5UQrD1_UhylsQihrJ7ajwLXM1Y",
    authDomain: "inandout-8434d.firebaseapp.com",
    databaseURL: "https://inandout-8434d-default-rtdb.firebaseio.com",
    projectId: "inandout-8434d",
    storageBucket: "inandout-8434d.appspot.com",
    messagingSenderId: "128146842247",
    appId: "1:128146842247:web:c8d833e592eba5ae258e22",
    //measurementId: "G-9431XGBXCY"
};
  
// Use this to initialize the firebase App
firebase.initializeApp(firebaseConfig);

const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
// app.use(router)
app.mount('#app')

