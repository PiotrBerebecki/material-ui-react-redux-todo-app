import { ADD_TODO, TOGGLE_TODO } from './../constants';

const defaultState = [
  { id: 11, text: 'Walk', date: new Date(), isComplete: false },
  { id: 12, text: 'Run', date: new Date(), isComplete: true },
];

const todo = (state = {}, { type, id, text, date }) => {
  switch (type) {
    case ADD_TODO:
      return {
        id,
        text,
        date,
        isComplete: false,
      };
    case TOGGLE_TODO:
      return Object.assign({}, state, { isComplete: !state.isComplete });
    default:
      return state;
  }
};

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, todo(undefined, action)];
    case TOGGLE_TODO:
      const toggledTodoIndex = state.findIndex(todo => todo.id === action.id);
      return [
        ...state.slice(0, toggledTodoIndex),
        todo(state[toggledTodoIndex], action),
        ...state.slice(toggledTodoIndex + 1),
      ];
    default:
      return state;
  }
};

export default todos;
