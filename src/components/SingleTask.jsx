import React from 'react'
import { makeStyles } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
  task: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  content: {
    '&.completed span': {
      textDecoration: 'line-through',
    },
  },
}))

const SingleTask = ({content, complete, id, completed, handleEdit, handleDelete}) => {

  const classes = useStyles()

  return (
    <li className={classes.task}>
      <div className={completed ? `${classes.content} completed` : `${classes.content}`}>
        <span>{content}</span>
      </div>
      <div className={classes.buttons}>
        <IconButton color="primary" aria-label="mark as completed" onClick={() => complete(id)}>
          <CheckCircleIcon />
        </IconButton>
        <IconButton color="primary" aria-label="edit task" onClick={() => handleEdit(content, id)}>
          <EditIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="edit task" onClick={() => handleDelete(id)}>
          <DeleteForeverIcon />
        </IconButton>
      </div>
    </li>
  )
}

export default SingleTask
