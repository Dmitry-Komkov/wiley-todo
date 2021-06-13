import React, { useState } from 'react'
import { Box, Button, Grid, makeStyles, TextField } from '@material-ui/core'
import { v4 } from 'uuid'

const useStyles = makeStyles((theme) => ({

}))

const AddTask = ({addTask}) => {

  const classes = useStyles()

  const [task, setTask] = useState({content: ''})

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(task)
    setTask({content: ''})
  }

  const handleChange = (e) => {
    setTask({
      id: v4(),
      content: e.target.value,
      completed: false
    })
  }

  return (
    <Box className={classes.wrapper}>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <TextField label="Create a new task" value={task.content} variant="outlined" size="small" onChange={handleChange} />
          </Grid>
          <Grid item>
            <Button color="primary" variant="contained" size="large" type="submit">Add task</Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}

export default AddTask
