import React from 'react'
import { Twitter } from '@material-ui/icons';
import Footer from '../components/Footer';
import bgSignIn from '../assets/img/bg-login.png'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles, TextField, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { appStyle } from '../AppStyle';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: '8px 0',
    width: 380
  },

  loginWrapper: {
    display: 'flex',
    height: 'calc(100vh - 45px)'
  },

  loginLeft: {
    flex: '0.55',
    display: 'grid',
    placeItems: 'center',
    backgroundImage: `url(${bgSignIn})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },

  loginRight: {
    display: 'flex',
    paddingLeft: '50px',
    justifyContent: 'flex-start',
    placeItems: 'center',
    width: 700,
    flex: '0.45'
  },

  rightInner: {
    height: 450,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  rightInner__buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
  }

}))


const Main: React.FC = () => {

  const classes = useStyles()
  const appClasses = appStyle()
  const history = useHistory()

  const [open, setOpen] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')


  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <div style={{ display: 'grid', placeItems: 'center', margin: '10px 0' }}>
          <Twitter className={appClasses.smallIcon} />
          <Typography variant='h5'>Створіть свій профіль</Typography>
        </div>

        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            margin="dense"
            id="name"
            label="Password"
            type="email"
            fullWidth
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Зареєструватися
          </Button>
        </DialogActions>
      </Dialog>

      <div className={classes.loginWrapper}>
        <div className={classes.loginLeft}>
          <Twitter className={appClasses.largeIcon} />
        </div>

        <div className={classes.loginRight}>
          <div className={classes.rightInner}>
            <Twitter className={appClasses.smallIcon} />
            <Typography variant='h2' style={{ fontWeight: 500 }}>Тут і зараз</Typography >
            <Typography variant='h4' style={{ fontWeight: 500 }}>Приєднуйтеся до Твіттера вже сьогодні.</Typography >
            <div className={classes.rightInner__buttonGroup}>
              <Button color='primary' variant='contained' className={classes.button} onClick={handleClickOpen}>Зареєструватися</Button>
              <Button color='primary' variant='outlined' className={classes.button} onClick={() => history.push('/login')}>Увійти</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Main
