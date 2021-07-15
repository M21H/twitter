import { Twitter } from '@material-ui/icons';
import Footer from '../components/Footer';
import bgLogin from '../assets/img/bg-login.png'
import { Button, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  largeIcon: {
    width: 420,
    height: 420,
    color: 'white',
  },

  smallIcon: {
    width: 50,
    height: 50,
    color: '#4da1f3'
  },

  bolt: {
    fontWeight: 600
  },

  button: {
    margin: '8px 0',
    height: 46,
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
    backgroundImage: `url(${bgLogin})`,
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
    height: 430,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  rightInner__buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
  }

}))

const SignIn = () => {

  const classes = useStyles()

  return (
    <>
      <div className={classes.loginWrapper}>
        <div className={classes.loginLeft}>
          <Twitter className={classes.largeIcon} />
        </div>

        <div className={classes.loginRight}>
          <div className={classes.rightInner}>
            <Twitter className={classes.smallIcon} />
            <Typography className={classes.bolt} variant='h2'>Тут і зараз</Typography >
            <Typography className={classes.bolt} variant='h4' style={{ marginBottom: '-50px' }}>Приєднуйтеся до Твіттера вже сьогодні.</Typography >
            <div className={classes.rightInner__buttonGroup}>
              <Button color='primary' variant='contained' className={classes.button}>Зареєструватися</Button>
              <Button color='primary' variant='outlined' className={classes.button}>Увійти</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SignIn
