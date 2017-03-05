import React, { PropTypes } from 'react';

import Btn from './Btn';
import Form from './Form';

export default function ErrorPopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  const { closePopup, errorMessage } = props;
  const closeErrorPopup = closePopup.bind(null, 'displayErrorPopup');

  return (
    <Form
      className={'error-popup'}
      closeForm={closeErrorPopup}
      handleSubmit={handleSubmit}
    >
      <h1 className="error-popup__header">Error!</h1>
      <p className="error-popup__text">{ errorMessage }</p>
      <Btn
        text={'Ok'}
        onClick={closeErrorPopup}
        mods={['small']}
      />
    </Form>
  );
}

ErrorPopup.propTypes = {
  closePopup: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
};
