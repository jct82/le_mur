import PropTypes from 'prop-types';

const ListInput = ({
  type, label, changeInput, name, value, action, classes
}) => {
  return (

    <div>
      <div className="field">
        <div className={value.trim() ? "input-wrapper on" : "input-wrapper"}>
          <input className={classes} type={type} name={name} onChange={changeInput} value={value} />
          <label>{label}</label>
          <div className="line" />
        </div>
      </div>
      <button className="btn add" type="button" onClick={action}></button>
    </div>
  );
};

ListInput.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  changeInput: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
export default ListInput;
