// form signup with 
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeUserRegisterInput, createUser } from '../../actions/users';
import Input from 'src/components/inputForm/inputs';
import PropTypes from 'prop-types';

const UserProfileForm = ({ submitProfileForm }) => {
  // send actions to the reducer
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)


  const handleChange = (event) => {
    console.log(event.target.value)
    console.log(event.target.name)
    const inputName = event.target.name
    const inputValue = event.target.value
    dispatch(storeUserRegisterInput(inputName, inputValue))
  }
  /* const updateProfile = (event) => {
    event.preventDefault();
    dispatch(updateUser())
  }
  */
 /* met les info utilis
 const user.name = useSelector((state) => state.user.name)
 const {} = user.name;
 */

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createUser())
  }

  return (
    <div className="form-content-right">
      <form className="form dark" onSubmit={handleSubmit}>
        <h1>Modifier Votre Profil</h1>

        <div className="form-inputs">
          <Input type="text" name="name" value={user.name} changeInput={handleChange} label="Prénom" />
        </div>

        <div className="form-inputs">
          <Input
            type="text"
            name="lastname"
            value={user.lastname}
            changeInput={handleChange}
            label="Nom"
          />
        </div>

        <div className="form-inputs">
          <Input
            type="email"
            name="email"
            value={user.email}
            changeInput={handleChange}
            label="Email"
          />

        </div>

        <div className="form-inputs">
          <Input
            type="password"
            name="password"
            value={user.password}
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

