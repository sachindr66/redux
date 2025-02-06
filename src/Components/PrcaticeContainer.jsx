// src/App.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../redux/Practice/PrcaticeType';  // Import action creators

function PrcaticeContainer() {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector((state) => state.todos || []);  // Fetch todos from Redux state
  const dispatch = useDispatch();  // Get the dispatch function

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo(newTodo));  // Dispatch action to add new to-do
      setNewTodo('');  // Clear input
    }
  };

  return (
    <div className="App">
      <h1>Redux To-Do List</h1>

      {/* Input to add a new todo */}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter new task..."
      />
      <button onClick={handleAddTodo}>Add Task</button>

      {/* Display the list of todos */}
      {todos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
              <button onClick={() => dispatch(toggleTodo(todo.id))}>
                {todo.completed ? 'Unmark' : 'Complete'}
              </button>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PrcaticeContainer;
