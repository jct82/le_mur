import PropTypes from 'prop-types';

const Select = ({
  label, changeInput, name, value, options
}) => {
  const focusOut = (e) => {
    e.preventDefault();
    const inputClass = e.target.parentNode;
    if (e.target.value.trim() !== '') {
      if (!inputClass.classList.contains('on')) inputClass.classList.add('on');
    }
    else {
      inputClass.classList.remove('on');
    }
    if (changeInput) changeInput(e);
  };
  const optionsJSX = options.map((option) => {
    return(
      <option key={option} value={option} onClick={focusOut}>{option}</option>
    );
  });
  return (
    <div className="input-wrapper">
      <select onBlur={focusOut} name={name} onChange={focusOut} value={value}>
        <option value="" onClick={focusOut}></option>
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
