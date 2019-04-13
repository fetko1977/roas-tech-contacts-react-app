import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBSAE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').once('value').then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses);
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('value', (snapshot) => {
//     console.log('value', snapshot);
// })

// const expensesCollection = [{
//     description: 'Water Bill',
//     note: '',
//     amount: 120,
//     createdAt: 0
// }, {
//     description: 'Gas Bill',
//     note: 'My Gas Bill',
//     amount: 150,
//     createdAt: 234560
// }, {
//     description: 'Rent Bill',
//     note: '',
//     amount: 450,
//     createdAt: 9345607
// }];

// expensesCollection.map((expense) => {
//     database.ref('expenses').push(expense);
// });

// database.ref('notes').push({
//     title: 'Todo',
//     body: 'Go for a run'
// })

// const notes = [{
//     id: '12',
//     title: 'First note',
//     body: 'First note body'
// }, {
//     id: '13cdfr',
//     title: 'Seccond note',
//     body: 'Seccond note body'
// }];



// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((error) => {
//         console.log('Error fetching data', error)
//     })

// database.ref().set({
//     name: 'Andrew Meed',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Philadelphia',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((error) => {
//     console.log('This failed', error)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })

// database
//     .ref('haveChanceForTheTitle')
//     .set(null)
//     .then(() => {
//         console.log('haveChanceForTheTitle is removed')
//     }).catch((error) => {
//         console.log('haveChanceForTheTitle remove failed', error)
//     });