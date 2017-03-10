export default function movieForm(state, action) {
  switch (action.type) {
    case '@@redux-form/SET_SUBMIT_SUCCEEDED': {
      if (action.meta.form !== 'movie') {
        return state;
      }

      const newFields = Object.keys(state.fields).reduce((fields, key) => {
        const result = Object.assign({}, fields);

        result[key] = false;
        return result;
      });

      return Object.assign({}, state, { anyTouched: false, fields: newFields, values: {} });
    }
    default:
      return state;
  }
}
