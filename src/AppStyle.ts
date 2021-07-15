import { makeStyles } from "@material-ui/core";

export const appStyle = makeStyles((theme) => ({
  smallIcon: {
    width: 50,
    height: 50,
    color: theme.palette.primary.main,
  },
  largeIcon: {
    width: 420,
    height: 420,
    color: 'white',
  },

  link: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}))