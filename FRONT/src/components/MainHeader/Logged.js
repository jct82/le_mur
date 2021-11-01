import { useDispatch } from 'react-redux';
import { disconnectUser } from '../../actions/users';

const Logged = () => {
  const dispatch = useDispatch();
  const handleDisconnectUser = () => {
    dispatch(disconnectUser());
  };
  return (
    <div className="userMenu__btnContainer">
      <p className="userMenu__btnContainer__userName">Julien Politi</p>
      <ul className="userMenu__btnContainer__buttons">
        <li className="userMenu__btnContainer__buttons__logoutBtn" onClick={handleDisconnectUser}>Déconnexion</li>
        <li className="userMenu__btnContainer__buttons__accountBtn">Mon compte</li>
      </ul>
    </div>
  );
};

export default Logged;
