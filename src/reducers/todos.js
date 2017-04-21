import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './../constants';
import findTodoIndexById from './../lib/findTodoIndexById';

const defaultState = [
  {
    id: 10003,
    text: 'Read about redux',
    date: new Date(),
    isComplete: true,
  },
  {
    id: 78009,
    text: 'Have a look at material design ideas on dribbble.com',
    date: new Date(),
    isComplete: true,
  },
  {
    id: 200009,
    text: 'Review material-ui documentation',
    date: new Date(),
    isComplete: false,
  },
  {
    id: 200010,
    text: 'Create react redux todo app',
    date: new Date(),
    isComplete: false,
  },
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
      const toggledTodoIndex = findTodoIndexById(state, action.id);
      return [
        ...state.slice(0, toggledTodoIndex),
        todo(state[toggledTodoIndex], action),
        ...state.slice(toggledTodoIndex + 1),
      ];
    case DELETE_TODO:
      const deletedTodoIndex = findTodoIndexById(state, action.id);
      return [
        ...state.slice(0, deletedTodoIndex),
        ...state.slice(deletedTodoIndex + 1),
      ];
    default:
      return state;
  }
};

export default todos;
