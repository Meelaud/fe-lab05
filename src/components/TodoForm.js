import React from 'react';

function TodoForm({ newTask, setNewTask, addTask }) {
  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder="Add new task!"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default TodoForm;