import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import useEditTodo from './useEditTodo';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function EditTodo(props) {
  const classes = useStyles();
  const { desc, title, onUpdate, handelNewTitle, handelNewDesc } = useEditTodo(props.item);

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Grid container alignItems='center' className={classes.paper}>
            <Grid item md={12} sm={12} xs={12}>
              <TextField defaultValue={title} onChange={handelNewTitle} id='outlined-basic' fullWidth label='Enter Title' multiline variant='outlined' />
            </Grid>
            <Grid item md={12} sm={12} xs={12} style={{ marginTop: '20px' }}>
              <TextField defaultValue={desc} onChange={(e) => handelNewDesc(e)} id='outlined-basic' fullWidth label='Enter Description' multiline variant='outlined' />
            </Grid>
            <Grid item md={12} sm={12} xs={12} style={{ marginTop: '20px' }}>
              <Button
                className={classes.button}
                variant='contained'
                color='primary'
                onClick={() => {
                  onUpdate();
                  props.handleClose();
                }}
              >
                Edit
              </Button>
            </Grid>
          </Grid>
        </Fade>
      </Modal>
    </div>
  );
}

export default EditTodo;
