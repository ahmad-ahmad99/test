import { TodoType } from '../constans/action-type';
// const userInfoFromLocalStorage = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
// let date = moment;
const initialState = {
  items: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TodoType.ADD_ITEM:
      console.log(action);
      return {
        ...state,
        items: [...state.items, { ...action.item, id: Date.now(), createdAt: new Date(Date.now()).toUTCString(), finishedAt: '', archivedAt: '', isArchived: false, isFinished: false }],
      };

    case TodoType.DELETE_ITEM:
      const update = state.items.filter((el) => el.id !== action.id);
      console.log(update);
      return {
        ...state,
        items: state.items.filter((el) => el.id !== action.id),
      };

    case TodoType.EDIT_ITEM:
      console.log(action.item.id);

      return {
        ...state,
        items: state.items.map((item) => (item.id === action.item.id ? { ...item, title: action.item.title, desc: action.item.desc } : item)),
      };

    case TodoType.ARCHIVED:
      return {
        ...state,
        items: state.items.map((item) => (item.id === action.id ? { ...item, archivedAt: new Date(Date.now()).toUTCString(), isArchived: true } : item)),
      };

    case TodoType.FINISHED:
      return {
        ...state,
        items: state.items.map((item) => (item.id === action.id ? { ...item, isFinished: true, finishedAt: new Date(Date.now()).toUTCString() } : item)),
      };

    default:
      return state;
  }
};
