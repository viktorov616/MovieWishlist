import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import Btn from './Btn';

function MovieForm(props) {
  return (
    <form onSubmit={props.handleSubmit} className="movie-form">
      <div className="movie-form__field-group">
        <label className="movie-form__label" htmlFor="Title">Title:</label>
        <Field className="movie-form__field" name="Title" component="input" type="text" />
      </div>
      <div className="movie-form__field-group">
        <label className="movie-form__label" htmlFor="Genre">Genre:</label>
        <Field className="movie-form__field" name="Genre" component="input" type="text" />
      </div>
      <div className="movie-form__field-group">
        <label className="movie-form__label" htmlFor="Poster">Poster url:</label>
        <Field className="movie-form__field" name="Poster" component="input" type="text" />
      </div>
      <div className="movie-form__field-group">
        <label className="movie-form__label" htmlFor="Runtime">Duration:</label>
        <Field className="movie-form__field" name="Runtime" component="input" type="text" />
        <label
          className="movie-form__label movie-form__label--padding"
          htmlFor="Released"
        >
          Released:
        </label>
        <Field className="movie-form__field" name="Released" component="input" type="text" />
      </div>
      <div className="movie-form__field-group">
        <label className="movie-form__label" htmlFor="Metascore">Metascore:</label>
        <Field className="movie-form__field" name="Metascore" component="input" type="text" />
        <label
          className="movie-form__label movie-form__label--padding"
          htmlFor="imdbRating"
        >
          imdbRating:
        </label>
        <Field className="movie-form__field" name="imdbRating" component="input" type="text" />
      </div>
      <div className="movie-form__field-group">
        <label className="movie-form__label" htmlFor="Director">Director:</label>
        <Field className="movie-form__field" name="Director" component="input" type="text" />
      </div>
      <div className="movie-form__field-group">
        <label className="movie-form__label" htmlFor="Actors">Actors:</label>
        <Field className="movie-form__field" name="Actors" component="input" type="text" />
      </div>
      <div className="movie-form__field-group">
        <label className="movie-form__label" htmlFor="Plot">Plot:</label>
        <Field className="movie-form__field" name="Plot" component="textarea" />
      </div>
      <Btn
        text={'Add movie'}
        onClick={() => {}}
        type={'sumbit'}
      />
    </form>
  );
}

MovieForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const movieForm = reduxForm({
  form: 'movie',
})(MovieForm);

export default movieForm;
