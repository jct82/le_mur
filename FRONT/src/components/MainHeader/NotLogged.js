import { useDispatch } from 'react-redux';
import { storeUSerInputValue } from '../../actions/users';
import Input from '../inputForm/inputs';

const NotLogged = () => {
  const dispatch = useDispatch();
  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    dispatch(storeUSerInputValue(name, value));
  };
  return (
    <div className="userMenu__login">
      <form className="dark testInput">
        <Input type="text" label="email" name="email" changeInput={handleChangeInput} />
        <Input type="password" label="password" name="password" changeInput={handleChangeInput} />
        <button type="submit">connexion</button>
      </form>

    </div>
  );
};

export default NotLogged;
