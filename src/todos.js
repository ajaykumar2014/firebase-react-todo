import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

import { addTodo } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const TodoForm = () => {
  const [input, setInput] = useState('');
  const classes = useStyles();

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (input && input.length > 0) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <div className={classes.root}>
      <form
        noValidate
        autoComplete="off"
        style={{ width: '90%' }}
        onSubmit={onSubmitHandler}
      >
        <div
          style={{
            display: 'flex',

            'flex-direction': 'row',
            'justify-content': 'space-between',
          }}
        >
          <TextField
            id="standard-full-width"
            label="Todo's"
            fullWidth
            multiline
            variant="outlined"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={onInputChange}
            required
          />
          <div style={{ 'align-self': 'baseline', 'margin-top': '10px' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              size="large"
            >
              Send
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
