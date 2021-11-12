import PropTypes from 'prop-types';

const Input = ({
  type, label, changeInput, name, value,
}) => {
  return (
    <div className={value.trim() ? "input-wrapper on" : "input-wrapper"}>
      <input type={type} name={name} onChange={changeInput} value={value} required/>
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
