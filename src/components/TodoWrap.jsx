import React, { useEffect, useState } from 'react'
import { Box, Container, Grid, makeStyles } from '@material-ui/core'
import AddTask from './AddTask'
import TasksList from './TasksList'
import EditItem from './EditTask'

const useStyles = makeStyles((theme) => ({

}))

// Reverse Sorting tasks
function sortReverse(arr) {
  return arr.sort((a, b) => (a.content < b.content) ? 1 : -1)
}

const TodoWrap = () => {

  const classes = useStyles()

  // States
  const [tasksList, setTasksList] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')

    if (savedTasks) return JSON.parse(savedTasks)

    return []
  })
  const [isEditing, setIsEditing] = useState(false)
  const [currentTask, setCurrentTask] = useState({})

  // Initialize Local Storage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksList))

  }, [tasksList])

  // Handle Functions

  //Handle Add Task
  const addTask = (task) => {
    let newList = [...tasksList]
    newList = [...newList, {id: task.id, content: task.content, completed: task.completed}]

    setTasksList(sortReverse(newList))
  }

  // Handle Complete Task
  const completeTask = (id) => {
    const idx = tasksList.findIndex(item => item.id === id)

    let newList = [...tasksList]
    newList[idx].completed = !newList[idx].completed

    setTasksList(sortReverse(newList))
  }

  // Handle Edit Task on Item Click Button
  const editTaskClick = (task, id) => {
    setIsEditing(true)
    setCurrentTask({content: task, id})
  }

  // Handle Updating Task
  const updateEditedTask = (text, id) => {
    const idx = tasksList.findIndex(item => item.id === id)
    const newTasks = [...tasksList]
    newTasks[idx].content = text

    setTasksList(sortReverse(newList))
    setIsEditing(false)
  }

  // Handle Delete Task
  const deleteTask = (id) => {
    const copy = [...tasksList]
    const newList = copy.filter(item => item.id !== id)

    setTasksList(sortReverse(newList))
  }

  return (
    <Box className={classes.wrapper} component="section" py={3}>
      <Container>
        <Box className={classes.content}>
          <Grid container spacing={3}>
            <Grid item md={5}>
              {
                !isEditing
                ? <AddTask addTask={addTask} />
                : <EditItem text={currentTask.content} id={currentTask.id} updateTask={updateEditedTask} cancelEdit={setIsEditing} />
              }
            </Grid>
            <Grid item md={7}>
              <TasksList tasksList={tasksList} completeTask={completeTask} handleEdit={editTaskClick} handleDelete={deleteTask} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default TodoWrap
