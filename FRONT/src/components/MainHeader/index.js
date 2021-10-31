import Logo from 'src/assets/img/Logo.svg';
import './header.scss';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';

const MainHeader = () => (
  <header className="header">
    <Link className="header__logo" to="/">
      <img className="header__logo__img" src={Logo} alt="logo" />
    </Link>
    <UserMenu />
  </header>
);

export default MainHeader;
