import PropTypes from 'prop-types';

const Textarea = ({
  label, changeInput, name, value,
}) => {
  return (
    <div className={value.trim() ? "input-wrapper on" : "input-wrapper"}>
      <textarea name={name} onChange={changeInput} value={value} />
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
