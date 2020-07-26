import React, { useState, memo } from 'react';
import { IconButton, ListItemIcon, TextField } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';

const TodoEdit = ({ item, onTodoUpdate, onTodoCancel }) => {
  const [updateData, setUpdateData] = useState(item);
  const [input, setInput] = useState(item.data.text || '');

  const onInputChange = (e) => {
    let value = e.target.value;
    setInput(value);
    setUpdateData({
      id: item.id,
      data: {
        text: value,
      },
    });
  };

  return (
    // <div
    //   style={{
    //     display: 'flex',
    //     'flex-direction': 'row',
    //     'justify-content': 'space-between',
    //     width: '100%',
    //   }}
    // >
    <>
      <TextField
        id="standard-full-width"
        label="Todo's"
        style={{ width: '90%', flex: 'none' }}
        fullWidth
        multiline
        variant="outlined"
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={onInputChange}
        required
        value={input}
      />
      <div style={{ 'align-self': 'baseline', 'margin-top': '10px' }}>
        <ListItemIcon>
          <IconButton edge="end" aria-label="edit">
            <CheckCircleOutlineIcon onClick={(e) => onTodoUpdate(updateData)} />
          </IconButton>
          <IconButton edge="end" aria-label="delete">
            <CancelIcon onClick={(e) => onTodoCancel()} />
          </IconButton>
        </ListItemIcon>
      </div>
    </>
    // </div>
  );
};

export default memo(TodoEdit);
