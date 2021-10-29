import { useDispatch, useSelector } from 'react-redux';
import submitBtn from 'src/assets/icons/submit-neg.png';
import { storeUSerInputValue } from '../../actions/users';
import Input from '../inputForm/inputs';

const NotLogged = () => {
  const dispatch = useDispatch();
  const passwordInputValue = useSelector((state) => state.user.credentials.password);
  const emailInputValue = useSelector((state) => state.user.credentials.email);
  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    dispatch(storeUSerInputValue(name, value));
  };
  return (
    <div className="userMenu__login">
      <form className="dark testInput">
        <Input type="text" label="email" name="email" changeInput={handleChangeInput} value={emailInputValue} />
        <Input type="password" label="password" name="password" changeInput={handleChangeInput} value={passwordInputValue} />
        <button className="userMenu__submitBtn" type="submit"><img className="userMenu__submitBtn__img" src={submitBtn} alt="submit" /></button>
      </form>
    </div>
  );
};

export default NotLogged;
