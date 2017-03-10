import React, { PropTypes } from 'react';

import Btn from './Btn';
import Form from './Form';

export default function MessagePopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  const { closePopup, header, message, mods, popupName } = props;
  const closeMessagePopup = closePopup.bind(null, popupName);
  const headerDefaultClass = 'message-popup__header';
  const headerClass = mods.reduce(
    (result, mod) => result.concat(`${headerDefaultClass}--${mod}`), [headerDefaultClass],
  ).join(' ');

  return (
    <Form
      className={'message-popup'}
      closeForm={closeMessagePopup}
      handleSubmit={handleSubmit}
    >
      <h1 className={headerClass}>{ header }</h1>
      <p className="message-popup__text">{ message }</p>
      <Btn
        text={'Ok'}
        onClick={closeMessagePopup}
        mods={['small']}
      />
    </Form>
  );
}

MessagePopup.propTypes = {
  closePopup: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  mods: PropTypes.array,
  popupName: PropTypes.string.isRequired,
};

MessagePopup.defaultProps = {
  mods: [],
};
