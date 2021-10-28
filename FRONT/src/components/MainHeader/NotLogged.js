import { useDispatch, useSelector } from 'react-redux';
import { storeUSerInputValue } from '../../actions/users';
import Input from '../inputForm/inputs';

const NotLogged = () => {
  const dispatch = useDispatch();
  const passwordInputValue = useSelector((state) => state.user.password);
  const emailInputValue = useSelector((state) => state.user.email);
  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    dispatch(storeUSerInputValue(name, value));
  };
  return (
    <div className="userMenu__login">
      <form className="dark testInput">
        <Input type="text" label="email" name="email" changeInput={handleChangeInput} value={emailInputValue} />
        <Input type="password" label="password" name="password" changeInput={handleChangeInput} value={passwordInputValue} />
        <button type="submit">connexion</button>
      </form>
    </div>
  );
};

export default NotLogged;
