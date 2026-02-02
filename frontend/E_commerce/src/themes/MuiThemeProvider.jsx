import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

export default function AppMuiThemeProvider({ children }) {
  const muiTheme = createTheme({
    palette: {
      mode: 'light',
    },
  })

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
