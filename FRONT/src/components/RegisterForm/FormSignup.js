// form signup with 
import React from 'react';
import useForm from './useForm';
import infoValidate from './infoValidate';
import { useDispatch, useSelector } from 'react-redux';
import { storeUserRegisterInput, createUser } from '../../actions/users';
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
    console.log(event.target.value)
    console.log(event.target.name)
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
      <form className="form" onSubmit={handleSubmit}>
        <h1>S'inscrire</h1>

        <div className="form-inputs">
          <label htmlFor="Prénom"
            className="form-label">
            Prénom
            <Input type="text" name="name" className="form-input" value={user.name} onChange={handleChange} />
          </label>
        </div>


        <div className="form-inputs">
          <label htmlFor="nom"
            className="form-label">
            Nom
          </label>
          <input
            id="nom"
            type="text"
            name="lastname"
            className="form-input"
            value={user.lastname}
            onChange={handleChange}
          />

        </div>
        <div className="form-inputs">
          <label htmlFor="Email"
            className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            value={user.email}
            onChange={handleChange}
          />

        </div>

        <div className="form-inputs">
          <label htmlFor="Password"
            className="form-label">
            Mot de passe
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            value={user.password}
            onChange={handleChange}
          />

        </div>

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
        <button className="from-input-btn" type="submit">
          <span className="submit.png"></span>Enregistrer
        </button>
      </form>
    </div>
  )
}

FormSignup.propTypes = {
  submitForm: PropTypes.func.isRequired,
};
export default FormSignup;

