import React, { PropTypes } from 'react';

import Btn from './Btn';

export default function SearchBar(props) {
  function handleChange(e) {
    const inputName = props.inputName;
    const inputValue = e.target.value;

    props.onChange(inputName, inputValue);
  }

  function handleEnterKey(e) {
    if (e.keyCode === 13) {
      handleSearch();
    }
  }

  function handleSearch() {
    const { inputName, inputValue, onChange, search } = props;

    search(inputValue);
    onChange(inputName, '');
  }

  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        type="text"
        value={props.inputValue}
        onChange={handleChange}
        onKeyDown={handleEnterKey}
      />
      <Btn
        handleClick={handleSearch}
        text={'Search'}
      />
    </div>
  );
}

SearchBar.propTypes = {
  inputName: PropTypes.string,
  inputValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  inputName: '',
  inputValue: '',
};
