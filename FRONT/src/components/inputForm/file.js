import PropTypes from 'prop-types';

const FileInput = ({
  label, value, changeInput, name
}) => {
  const getFileName = (url) => {
    const value = url.substring(url.lastIndexOf('/') + 1);
    return value;
  }
  const activeFileInput = (e) => {
    e.target.previousElementSibling.click();
  }
  return (
    <div className="input-file-wrapper">
      <input className="btn" type="file" name={name} onChange={changeInput}/>
      <div className="btn fake-file" onClick={activeFileInput}>{label}</div>
      <span className="file-name">{getFileName(value)}</span>
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
