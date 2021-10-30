import PropTypes from 'prop-types';

const FileInput = ({
  label
}) => {
  const activeFileInput = (e) => {
    e.target.previousElementSibling.click();
  }

  const setFileInfo = (e) => {
    e.target.nextElementSibling.nextElementSibling.textContent = e.target.files[0].name;
  }
  return (
    <div className="input-file-wrapper">
      <input className="btn" type="file" onChange={setFileInfo}/>
      <div className="btn fake-file" onClick={activeFileInput}>{label}</div>
      <span className="file-name">machin.jpeg</span>
    </div>
  );
};

FileInput.propTypes = {
  label: PropTypes.string.isRequired,
};
export default FileInput;