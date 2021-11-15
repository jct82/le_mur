import PropTypes from 'prop-types';

const FileInput = ({
  label, value, changeInput, name, classes
}) => {
  const activeFileInput = (e) => {
    e.target.previousElementSibling.click();
  }
  return (
    <div className="input-file-wrapper">
      <input  className={`btn ${classes}`}  type="file" name={name} onChange={changeInput}/>
      <div className="btn fake-file" onClick={activeFileInput}>{label}</div>
      <span className="file-name">{value}</span>
    </div>
  );
};

FileInput.propTypes = {
  label: PropTypes.string.isRequired,
  changeInput: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default FileInput;
