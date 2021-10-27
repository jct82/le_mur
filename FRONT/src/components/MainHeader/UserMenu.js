import userIcon from 'src/assets/icons/user-neg.png';
import './header.scss';
import { useState } from 'react';

const UserMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className={!isMenuOpen ? 'userMenu' : 'userMenu --open'} onClick={handleToggleMenu}>
        <div className="userMenu__userIcon">
          <img className="userMenu__userIcon__img" src={userIcon} alt="user icon" />
        </div>
      </div>
    </>
  );
};

export default UserMenu;
