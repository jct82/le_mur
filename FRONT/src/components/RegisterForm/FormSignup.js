// form signup with 
import React from 'react';
import useForm from './useForm';
import infoValidate from './infoValidate';
import { useDispatch, useSelector } from 'react-redux';
import {storeUserRegisterInput, createUser } from '../../actions/users';
import Input from 'src/components/inputForm/inputs';
import PropTypes from 'prop-types';

const FormSignup = ({ submitForm }) => {
  // send actions to the reducer
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)


  // reasearch the values from useForm
  /*const { handleChange, values, handleSubmit, errors }
    = useForm(submitForm, infoValidate);
*/

  const handleChange = (event) => {
    const inputName = event.target.name
    const inputValue = event.target.value
    dispatch(storeUserRegisterInput(inputName, inputValue))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createUser())
  }

  return (
    <div className="form-content-right">
      <form className="form dark" onSubmit={handleSubmit}>
        <h1 className="register-title">INSCRIPTION</h1>

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
        <button className="btn btn-submit-txt" type="submit">S'inscrire</button>
      </form>
    </div>
  )
}

FormSignup.propTypes = {
  submitForm: PropTypes.func.isRequired,
};
export default FormSignup;

