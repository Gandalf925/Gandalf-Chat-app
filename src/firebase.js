import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCOtvNW3VxbqfHKmTPvB3Hxqu3mP4F23TU',
  authDomain: 'chatapp-with-gandalf.firebaseapp.com',
  projectId: 'chatapp-with-gandalf',
  storageBucket: 'chatapp-with-gandalf.appspot.com',
  messagingSenderId: '311596576535',
  appId: '1:311596576535:web:aa8e4652cebf744c291152',
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
};
