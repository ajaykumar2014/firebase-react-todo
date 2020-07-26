import firebase from 'firebase';

const firebaseInitizeApp = firebase.initializeApp({
  apiKey: 'AIzaSyAu-CiQ5Bz20k-O4hlsGS_53u6XgAbZZqs',
  authDomain: 'lateral-booster-247512.firebaseapp.com',
  databaseURL: 'https://lateral-booster-247512.firebaseio.com',
  projectId: 'lateral-booster-247512',
  storageBucket: 'lateral-booster-247512.appspot.com',
  messagingSenderId: '31966948507',
  appId: '1:31966948507:web:c106852f7a1768a3e96a3e',
  measurementId: 'G-BWHQM55X6Y',
});

const db = firebaseInitizeApp.firestore().collection('todo_collection');

export { db };

export const addTodo = (text) => {
  db.add({
    dateTime: firebase.firestore.FieldValue.serverTimestamp(),
    text: text,
  });
};
export const listOfTodos = () => {
  return (todos) => {
    db.orderBy('dateTime', 'desc').onSnapshot((snapshots) =>
      snapshots.docs.map((doc) =>
        todos.push(snapshots.docs.map((doc) => doc.data()))
      )
    );
  };
};
export const deleteTodo = (id) => {
  return db.doc(id).delete();
};
export const updateTodo = (element) => {
  db.doc(element.id).update({
    text: element.data.text,
    dateTime: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

export default db;
