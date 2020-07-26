import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { List, Divider } from '@material-ui/core';
import TodoItem from './todoItem';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const TodoList = ({ todosData }) => {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="contacts">
      {todosData.map((d) => {
        return (
          <>
            <TodoItem item={d}></TodoItem>
            <Divider />
          </>
        );
      })}
    </List>
  );
};

export default TodoList;
