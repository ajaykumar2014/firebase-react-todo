import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import TodoForm from './todos';
import TodoList from './todoList';
import './App.css';

import db from './firebase';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    db.orderBy('dateTime', 'desc').onSnapshot((snapshots) => {
      setTodos(
        snapshots.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <Container maxWidth="lg" fixed={true}>
      <TodoForm />
      <TodoList todosData={todos} />
    </Container>
  );
}

export default App;
