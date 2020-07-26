import React, { useState, memo } from 'react';
import {
  ListItem,
  ListItemText,
  IconButton,
  ListItemIcon,
  Box,
} from '@material-ui/core';
import { deleteTodo, updateTodo } from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import TodoEdit from './todoEdit';

const TodoItem = ({ item }) => {
  const [isEdit, setEdit] = useState(false);
  const onEditHandler = (element) => {
    setEdit((isEdit) => !isEdit);
  };

  const onTodoUpdate = (element) => {
    if (element && element.data.text.length > 0) {
      updateTodo(element);
      setEdit((isEdit) => !isEdit);
    }
  };

  const onTodoCancel = (e) => {
    setEdit(false);
  };

  return (
    <ListItem alignItems="flex-start">
      {!isEdit && (
        <>
          <ListItemText
            primary={
              <Box
                component="div"
                my={2}
                textOverflow="ellipsis"
                padding="5px"
                whiteSpace="nowrap"
                overflow="hidden"
                bgcolor="background.paper"
              >
                {item.data.text}
              </Box>
            }
            style={{ width: '90%', flex: 'none' }}
          />

          <ListItemIcon className="MuiListItemIcon">
            <IconButton edge="end" aria-label="edit">
              <EditIcon onClick={(e) => onEditHandler(null)} />
            </IconButton>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon onClick={() => deleteTodo(item.id)} />
            </IconButton>
          </ListItemIcon>
        </>
      )}
      {isEdit && (
        <TodoEdit
          item={item}
          onTodoUpdate={onTodoUpdate}
          onTodoCancel={onTodoCancel}
        />
      )}
    </ListItem>
  );
};

export default memo(TodoItem);
