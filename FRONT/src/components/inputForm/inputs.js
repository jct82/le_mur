import PropTypes from 'prop-types';

const Input = ({
  type, label, changeInput, name, value,
}) => {
  const focusOut = (e) => {
    const inputClass = e.target.parentNode;
    if (e.target.value.trim() != '') {
      if (!inputClass.classList.contains('on')) inputClass.classList.add('on');
    } else {
      inputClass.classList.remove('on');
    }
  }
  return (
    <div className="input-wrapper">
      <input type={type} onBlur={focusOut} value={value} name={name} onChange={changeInput} />
      <label>{label}</label>
      <div className="line" />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  changeInput: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default Input;
