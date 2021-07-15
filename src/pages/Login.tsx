import React from 'react'
import { Button, makeStyles, TextField, Typography, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, } from '@material-ui/core'
import { Twitter } from '@material-ui/icons';
import { appStyle } from '../AppStyle';

const useStyles = makeStyles((theme) => ({
  loginWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 380,
    width: 330,
    margin: '15px auto'
  },
  links: {
    display: 'flex',
    justifyContent: 'space-evenly',
    fontSize: 14,
    color: theme.palette.primary.main,
  },
  button: {
    '&:disabled': {
      backgroundColor: '#8ed0f8',
      color: 'white'
    }
  }
}))



const Login: React.FC = () => {

  const classes = useStyles()
  const appClasses = appStyle()

  return (
    <div className={classes.loginWrapper}>
      <Twitter className={appClasses.smallIcon} />
      <Typography variant='h4' style={{ fontWeight: 500 }}>Увійти у Твіттер</Typography>
      <TextField variant='outlined' label="Тел., ел. пошта або ім'я кор" autoFocus type='email' />
      <TextField variant='outlined' label="Пароль" />
      <Button color='primary' variant='contained' disabled className={classes.button}>Увійти</Button>
      <div className={classes.links}>
        <a href="#" className={appClasses.link}>Забули пароль?</a><span>·</span>
        <a href="#" className={appClasses.link}>Зареєструватись у Твіттері</a>
      </div>
    </div>
  )
}

export default Login
