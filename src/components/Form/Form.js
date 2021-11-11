import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import useForm from './useForm';
const useStyles = makeStyles({
  root: {
    marginTop: 16,
    marginBottom: 16,
    padding: 16,
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
  },
  button: {
    marginTop: 16,
  },
});

const Form = () => {
  const { title, desc, errTitle, errDesc, handleTitle, handleDesc, handleClick } = useForm();
  const classes = useStyles();
  return (
    <Container maxWidth='sm' className={classes.root}>
      <Grid container alignItems='center'>
        <Grid item md={12} sm={12} xs={12}>
          <TextField value={title} onChange={handleTitle} error={errTitle ? true : false} helperText={errTitle} id='outlined-basic' fullWidth label='Enter Title' multiline variant='outlined' />
        </Grid>
        <Grid item md={12} sm={12} xs={12} style={{ marginTop: '20px' }}>
          <TextField value={desc} onChange={handleDesc} error={errDesc ? true : false} helperText={errDesc} id='outlined-basic' fullWidth label='Enter Description' multiline variant='outlined' />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Button className={classes.button} variant='contained' color='primary' onClick={handleClick}>
            Add
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Form;
