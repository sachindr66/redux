// src/redux/todoSlice.js

// Initial state
const initialState = {
  todos: [],  // Always start with an empty array
};

// Reducer
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }],
      };

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

// Action creators
export const addTodo = (text) => ({ type: 'ADD_TODO', payload: text });
export const toggleTodo = (id) => ({ type: 'TOGGLE_TODO', payload: id });
export const deleteTodo = (id) => ({ type: 'DELETE_TODO', payload: id });
