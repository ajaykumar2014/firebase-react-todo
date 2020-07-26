import firebase from 'firebase';

const firebaseInitizeApp = firebase.initializeApp({
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
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
