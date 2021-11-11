// form UserProfileForm with 
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { storeUserRegisterInput, updateUser } from '../../actions/users';
import Input from 'src/components/inputForm/inputs';
import PropTypes from 'prop-types';
// import Profile from './Profile';

const UserProfileForm = () => {
  const history = useHistory();
  
  // send actions to the reducer
  const dispatch = useDispatch();
  const userInput = useSelector ((state) => state.user)

  const handleChange = (event) => {
    const inputName = event.target.name
    const inputValue = event.target.value
    dispatch(storeUserRegisterInput(inputName, inputValue))
  }

  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser());
    history.push('/');
  }

  return (
    <div className="form-content">
      <form className="form profileForm dark" onSubmit={handleUpdateSubmit}>
        <h1 className="form__title">Modifier Votre Profil</h1>

        <div className="form-inputs">
          <Input type="text" 
          name="name" 
          value={userInput.name} 
          changeInput={handleChange} 
          label="Prénom" />
        </div>

        <div className="form-inputs">
          <Input
            type="text"
            name="lastname"
            value={userInput.lastname}
            changeInput={handleChange}
            label="Nom"
          />
        </div>

        <div className="form-inputs">
          <Input
            type="password"
            name="password"
            value={userInput.password}
            changeInput={handleChange}
            label="Mot de passe"
          />

        </div>
        {/*
        <div className="form-inputs">
          <label htmlFor="Password2"
            className="form-label">
            Confirmez votre mot de passe
          </label>
          <input
            id="password2"
            type="password2"
            name="password2"
            className="form-input"
            value={user.password2}
            onChange={handleChange}
          />

        </div>
        */}
        <button className="btn btn-submit-txt" type="submit">Enregistrer</button>
      </form>
    </div>
  )
}

UserProfileForm.propTypes = {
  userProfileForm: PropTypes.func.isRequired,
};
export default UserProfileForm;

