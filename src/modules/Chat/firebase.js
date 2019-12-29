import * as firebase from 'firebase';

const config = {
    apiKey: 'AAAAWqwoeHE:APA91bFHppp96PV0rAAZTLM685hsAOwYuVTWAR3SMnFzsLmoSmjS4asj3l0YgLVnwK-Z5AuwhtibX9xNBGKvDQwmJQlEG2sq4y4tEU2pRYjV8rnYa31MauBU3V09FE9AvCLparMCgzHP',
    authDomain: 'mobilemangtix.firebaseapp.com',
    databaseURL: 'https://mobilemangtix.firebaseio.com',
    projectId: 'mobilemangtix',
    storageBucket: 'mobilemangtix.appspot.com',
    messagingSenderId: '389435390065',
};

firebase.initializeApp(config);

const database = firebase.database();

export {
    database,
};