import React, { Component, PropTypes } from 'react';

export default class Btn extends Component {
  componentWillUpdate(nextProps) {
    if (this.props.text !== nextProps.text) {
      const { height } = getComputedStyle(this.btn);
      this.btn.style.maxHeight = `${parseInt(height, 10) + 1000}px`;

      console.log(height);
    }
  }

  render() {
    const { props } = this;
    const btnDefaultClass = 'btn';
    const btnClass = props.mods.reduce(
      (result, mod) => result.concat(`${btnDefaultClass}--${mod}`), [btnDefaultClass],
    ).join(' ');

    return (
      <button
        onClick={props.onClick}
        className={btnClass}
        ref={btn => (this.btn = btn)}
        type={props.type}
      >
        { props.text }
      </button>
    );
  }
}

Btn.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  mods: PropTypes.array,
};

Btn.defaultProps = {
  type: 'button',
  mods: [],
};
