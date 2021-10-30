import userIcon from 'src/assets/icons/user-neg.png';
import './header.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Logged from './Logged';
import NotLogged from './NotLogged';

const UserMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isLogged = useSelector((state) => state.user.logged);
  // const isLogged = false;

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className={!isMenuOpen ? 'userMenu' : 'userMenu --open --overflow'}>
        <div className="userMenu__userIcon" onClick={handleToggleMenu}>
          <img className="userMenu__userIcon__img" src={userIcon} alt="user icon" />
        </div>
        { isLogged
          ? <Logged />
          : <NotLogged />}
      </div>
    </>
  );
};

export default UserMenu;
