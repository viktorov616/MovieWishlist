const defaultState = {
  displaySucceedPopup: false,
};

export default function manualAdd(state = defaultState, action) {
  switch (action.type) {
    case 'CLOSE_POPUP':
      if (!(action.name in state)) {
        return state;
      }

      return Object.assign({}, state, { [action.name]: false });
    case 'OPEN_POPUP':
      if (!(action.name in state)) {
        return state;
      }

      return Object.assign({}, state, { [action.name]: true });
    default:
      return state;
  }
}
