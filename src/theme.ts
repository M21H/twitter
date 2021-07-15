//@ts-nocheck

import { red } from '@material-ui/core/colors'
import { createTheme } from '@material-ui/core/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(29, 161, 242)',
      dark: 'rgb(26, 145, 218)',
      contrastText: '#fff',
    },
    secondary: {
      main: 'rgb(26, 145, 218)',
    },
    error: {
      main: red.A400
    },

    background: {
      default: '#fff'
    },
  },
  shadows: [],
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 50,
        textTransform: 'none',
      }
    }
  }
})