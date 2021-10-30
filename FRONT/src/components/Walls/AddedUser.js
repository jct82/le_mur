import closeIcon from 'src/assets/icons/cross-neg-white.png';

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

export default AddedUser;
