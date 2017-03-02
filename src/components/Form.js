import React, { Component, PropTypes } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.handleEsc = this.handleEsc.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEsc);
  }

  handleEsc(e) {
    if (e.keyCode === 27) {
      this.props.closeForm();
    }
  }

  render() {
    const { props } = this;
    const formClass = `form ${props.className}`;

    return (
      <form className={formClass} onSubmit={props.handleSubmit}>
        <div className={`${props.className}__inner`}>
          { props.children }
          <svg
            className={`${props.className}__btn-close`}
            width="25" height="25"
            onClick={props.closeForm}
          >
            <use xlinkHref="#icon-cross" />
          </svg>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  handleSubmit: PropTypes.func,
  closeForm: PropTypes.func,
};

Form.defaultProps = {
  children: null,
  className: '',
  handleSubmit: () => {},
  closeForm: () => {},
};
