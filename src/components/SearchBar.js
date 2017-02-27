import React, { PropTypes } from 'react';

import Btn from './Btn';

export default function SearchBar(props) {
  function handleEnterKey(e) {
    if (e.keyCode === 13) {
      props.handleSearch();
    }
  }

  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        type="text"
        onChange={props.handleChange}
        onKeyDown={handleEnterKey}
      />
      <Btn
        handleClick={props.handleSearch}
        text={'Search'}
      />
    </div>
  );
}

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
