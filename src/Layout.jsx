import React from 'react'
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    text: {
      primary: "rgb(34, 34, 34)",
    }
  }
});

const Layout = ({children}) => {
  return (
    <div className="app-layout">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <main>{children}</main>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default Layout
