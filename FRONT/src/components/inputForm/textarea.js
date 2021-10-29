import PropTypes from 'prop-types';

const Textarea = ({
  label, changeInput, name, value,
}) => {
  const focusOut = (e) => {
    const inputClass = e.target.parentNode;
    if (e.target.value.trim() !== '') {
      if (!inputClass.classList.contains('on')) inputClass.classList.add('on');
    }
    else {
      inputClass.classList.remove('on');
    }
  };
  return (
    <div className="input-wrapper">
      <textarea onBlur={focusOut} name={name} onChange={changeInput} value={value} />
      <label>{label}</label>
      <div className="line" />
    </div>
  );
};

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  changeInput: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Textarea;
