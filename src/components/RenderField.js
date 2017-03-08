import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function RenderField(props) {
  const {
    className, input, input: { name, value }, label, meta: { error, touched }, type,
  } = props;
  const inputClass = classNames(`${className}__field`, {
    [`${className}__field--error`]: touched && error && !value,
  });
  const validationNotice = (touched && error)
    ? <span className={`${className}__validation-notice`}>{error}</span> : null;

  return (
    <div className={`${className}__field-group`}>
      <label className={`${className}__label`} htmlFor={name}>{ label }</label>
      <div className={`${className}__inner`}>
        <input {...input} className={inputClass} type={type} />
        { validationNotice }
      </div>
    </div>
  );
}

RenderField.propTypes = {
  className: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
  }).isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool,
  }).isRequired,
  type: PropTypes.string.isRequired,
};

RenderField.defaultProps = {
  className: '',
};
