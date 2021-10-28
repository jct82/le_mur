import userIcon from 'src/assets/icons/user-neg.png';
import PropTypes from 'prop-types';

const UserTag = ({ pseudo }) => (
  <div className="wallcard__coworkers__coworker">
    <img className="wallcard__coworkers__coworker__userIcon" src={userIcon} alt="icone user" />
    <p className="wallcard__coworkers__coworker__userName">{pseudo}</p>
  </div>
);
UserTag.propTypes = {
  pseudo: PropTypes.string.isRequired,
};

export default UserTag;
