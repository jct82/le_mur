import userIcon from 'src/assets/icons/user-neg.png';
import './header.scss';
import { useSelector, useDispatch } from 'react-redux';
import Logged from './Logged';
import NotLogged from './NotLogged';
import { toggleUserMenu } from '../../actions/users';

const UserMenu = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.user.isMenuOpen);
  // const [isMenuOpen, setMenuOpen] = useState(false);
  const isLogged = useSelector((state) => state.user.logged);

  const handleToggleMenu = () => {
    dispatch(toggleUserMenu());
    // setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className={!isMenuOpen ? 'userMenu' : 'userMenu --open --overflow'}>
        <div className="userMenu__userIcon" onClick={handleToggleMenu}>
          <img className="userMenu__userIcon__img" src={userIcon} alt="user icon" />
        </div>
        { isLogged
          ? <Logged onToggleMenu={handleToggleMenu} />
          : <NotLogged />}
      </div>
    </>
  );
};

export default UserMenu;
