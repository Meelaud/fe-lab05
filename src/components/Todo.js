import React from 'react';

function Todo({ task, index, toggleTaskCompletion, deleteTask }) {
  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(index)}
      />
      <span className={task.completed ? 'completed' : ''}>{task.text}</span>
      <button onClick={() => deleteTask(index)}>Remove</button>
    </div>
  );
}

export default Todo;