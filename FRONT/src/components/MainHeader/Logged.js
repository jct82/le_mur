import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { disconnectUser } from '../../actions/users';
import { emptyWallsList } from '../../actions/walls';

const Logged = ({ onToggleMenu }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleDisconnectUser = () => {
    dispatch(disconnectUser());
    dispatch(emptyWallsList());
    onToggleMenu();
    history.push('/');
  };
  const user = useSelector((state) => state.user.loggedUserName);
  return (
    <div className="userMenu__btnContainer">
      <p className="userMenu__btnContainer__userName">{user}</p>
      <ul className="userMenu__btnContainer__buttons">
        <li className="userMenu__btnContainer__buttons__logoutBtn" onClick={handleDisconnectUser}>Déconnexion</li>
        <Link to="/userProfile"> <li className="userMenu__btnContainer__buttons__accountBtn">Mon compte</li> </Link>
      </ul>
    </div>
  );
};

Logged.propTypes = {
  onToggleMenu: PropTypes.func.isRequired,
};

export default Logged;
