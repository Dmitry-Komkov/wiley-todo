import React from 'react'
import { Box, Container, Grid, makeStyles } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  header: {
    padding: '1rem 0',
    backgroundColor: [theme.palette.primary.main],
    color: grey[50],
  },

  logo: {
    '& span': {
      fontSize: '2rem',
      fontWeight: '700',
    },
  },
}))

const Header = () => {

  const classes = useStyles()

  return (
    <header className={classes.header}>
      <Container>
        <Box className={classes.content}>
          <Grid container>
            <Grid item md={3}>
              <Box className={classes.logo}>
                <span>Wiley Todo App</span>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </header>
  )
}

export default Header
