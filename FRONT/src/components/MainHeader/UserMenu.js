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
      <div className={!isMenuOpen ? 'userMenu' : 'userMenu --open'}>
        <div className="userMenu__userIcon" onClick={handleToggleMenu}>
          <img className="userMenu__userIcon__img" src={userIcon} alt="user icon" />
        </div>
        <div className="userMenu__btnContainer">
          <p className="userMenu__btnContainer__userName">julien politi</p>
          <ul className="userMenu__btnContainer__buttons">
            {/* <li><button className="userMenu__btnContainer__buttons__logoutBtn">Déconnexion</button></li>
            <li><button className="userMenu__btnContainer__buttons__accountBtn">Mon compte</button></li> */}
            <li className="userMenu__btnContainer__buttons__logoutBtn">Déconnexion</li>
            <li className="userMenu__btnContainer__buttons__accountBtn">Mon compte</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
