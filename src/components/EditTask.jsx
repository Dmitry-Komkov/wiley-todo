import React, { useState } from 'react'
import { Box, Button, Grid, makeStyles, TextField } from '@material-ui/core'
import { v4 } from 'uuid'

const useStyles = makeStyles((theme) => ({

}))

const EditItem = ({text, updateTask, id, cancelEdit}) => {

  const classes = useStyles()

  const [task, setTask] = useState({content: text})

  const handleSubmit = (e) => {
    e.preventDefault()
    updateTask(task.content, id)
  }

  const handleChange = (e) => {
    setTask({
      content: e.target.value,
    })
  }

  return (
    <Box className={classes.wrapper}>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <TextField label="Edit task" value={task.content} variant="outlined" size="small" onChange={handleChange} />
          </Grid>
          <Grid item>
            <Button color="primary" variant="contained" size="large" type="submit">Update</Button>
            <Button color="default" variant="contained" size="large" type="submit" onClick={() => cancelEdit(false)}>Cancel</Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}

export default EditItem
