// src/components/TaskCard.js
import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Chip, Stack } from '@mui/material';
import { format } from 'date-fns';

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'high':
      return 'error';
    case 'medium':
      return 'warning';
    case 'low':
      return 'success';
    default:
      return 'default';
  }
};

const TaskCard = ({ task, onEdit, onDelete }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {task.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {task.description}
        </Typography>
        <Stack direction="row" spacing={1} mb={2}>
          <Chip label={task.category} color="primary" />
          <Chip label={task.priority} color={getPriorityColor(task.priority)} />
          <Chip label={task.status} variant="outlined" />
        </Stack>
        <Typography variant="body2" color="text.secondary">
          Due: {format(new Date(task.dueDate), 'PPP')}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onEdit(task)}>
          Edit
        </Button>
        <Button size="small" color="error" onClick={() => onDelete(task._id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default TaskCard;