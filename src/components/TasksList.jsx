import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { v4 } from 'uuid'
import SingleTask from './SingleTask'

const useStyles = makeStyles((theme) => ({
  tasksList: {
    '& li:not(:last-child)': {
      marginBottom: '.5rem',
      paddingBottom: '.5rem',
      borderBottom: '1px solid #ddd',
    },
  }
}))

const TasksList = ({tasksList, completeTask, handleEdit, handleDelete}) => {

  const classes = useStyles()

  return (
    <Box className={classes.wrapper}>
      <ul className={classes.tasksList}>
        {
          tasksList.map(item => (
            <SingleTask key={item.id} id={item.id} content={item.content} complete={completeTask} completed={item.completed} handleEdit={handleEdit} handleDelete={handleDelete} />
          ))
        }
      </ul>
    </Box>
  )
}

export default TasksList
