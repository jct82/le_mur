import PropTypes from 'prop-types';

const Select = ({
  label, changeInput, name, value, options
}) => {
  const optionsJSX = options.map((option) => {
    return(
      <option key={option} value={option}>{option}</option>
    );
  });
  return (
    <div className={value.trim() ? "input-wrapper on" : "input-wrapper"}>
      <select name={name} onChange={changeInput} value={value}>
        <option value=""></option>
        {optionsJSX}
      </select>
      <label>{label}</label>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  changeInput: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};
export default Select;
