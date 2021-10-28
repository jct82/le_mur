import Input from '../inputForm/inputs';

const NotLogged = () => (
  <div className="userMenu__login">
    {/* <p className="userMenu__login__formTitle">Connexion</p> */}
    <form className="dark testInput">
      <Input type="text" name="email" />
      <Input type="password" name="password" />
      <button type="submit">connexion</button>
    </form>

  </div>
);

export default NotLogged;
