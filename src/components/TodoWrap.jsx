import React from 'react'
import { Box, Container, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({

}))

const TodoWrap = () => {

  const classes = useStyles()

  return (
    <Box className={classes.wrapper} component="section" py={3}>
      <Container>
        <Box className={classes.content}>

        </Box>
      </Container>
    </Box>
  )
}

export default TodoWrap
