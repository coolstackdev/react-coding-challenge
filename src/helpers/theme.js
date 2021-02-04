import { createMuiTheme } from '@material-ui/core'

export const makeTheme = () =>
  createMuiTheme({
    palette: {
      primary: {
        main: '#00AEAE',
      },
      secondary: {
        main: '#FF1200'
      },
      error: {
        main: '#F56236'
      },
      warning: {
        main: '#FCE788'
      },
      info: {
        main: '#88FCA3'
      },
    }
  })
