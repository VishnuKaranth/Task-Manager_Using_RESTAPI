// models/taskModel.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  title: {
    type: String,
    required: [true, 'Please add a task title']
  },
  description: {
    type: String,
    required: [true, 'Please add a task description']
  },
  status: {
    type: String,
    enum: ['todo', 'in-progress', 'completed'],
    default: 'todo'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  category: {
    type: String,
    required: [true, 'Please add a category']
  },
  dueDate: {
    type: Date,
    required: [true, 'Please add a due date']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Task', taskSchema);