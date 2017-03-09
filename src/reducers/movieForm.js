export default function movieForm(state, action) {
  switch (action.type) {
    case '@@redux-form/SET_SUBMIT_SUCCEEDED':
      if (action.meta.form !== 'movie') {
        return state;
      }

      return undefined;
    default:
      return state;
  }
}
