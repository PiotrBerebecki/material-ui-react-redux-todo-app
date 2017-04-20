import { ADD_TODO, TOGGLE_TODO } from './../constants';

let nextTodoId = 0;

export const addTodo = ({ text, date }) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text,
    date,
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};
