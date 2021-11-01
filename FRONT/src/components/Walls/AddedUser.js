import closeIcon from 'src/assets/icons/cross-neg-white.png';
import PropTypes from 'prop-types';

const AddedUser = ({users, onDeleteCoworker}) => (
  <ul className="wallForm__usersList">
    {
      users.map((user) => (
        <li key={user} className="wallForm__usersList__user">
          {user}
          <img className="wallForm__usersList__user__deleteIcon" src={closeIcon} onClick={() => onDeleteCoworker(user)} alt="delete" />
        </li>
      ))
    }
  </ul>
);

AddedUser.propTypes = {
  users: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDeleteCoworker: PropTypes.func.isRequired,
};

export default AddedUser;
