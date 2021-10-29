// form signup with 
import React from 'react';
import useForm from './useForm';
import infoValidate from './infoValidate';

const FormSignup = ({ submitForm }) => {
  // reasearch the values from useForm
  const { handleChange, values, handleSubmit, errors }
    = useForm(submitForm, infoValidate);


  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>S'inscrire</h1>

        <div className="form-inputs">
          <label htmlFor="Prénom"
            className="form-label">
            Prénom
          </label>
          <input
            id="prénom"
            type="text"
            name="prénom"
            className="form-input"
            placeholder="Entrez votre Prénom"
            value={values.prénom}
            onChange={handleChange}
          />

          {errors.prénom && <p>{errors.prénom}</p>}
        </div>


        <div className="form-inputs">
          <label htmlFor="nom"
            className="form-label">
            Nom
          </label>
          <input
            id="nom"
            type="text"
            name="nom"
            className="form-input"
            placeholder="Entrez votre Nom"
            value={values.nom}
            onChange={handleChange}
          />
          {errors.nom && <p>{errors.nom}</p>}
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
            placeholder="Entrez votre email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
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
            placeholder="Entrez votre mot de passe"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
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
            placeholder="Entrez votre mot de passe"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="from-input-btn" type="submit">
          <span className="submit.png"></span>Enregistrer
        </button>
      </form>
    </div>
  )
}

export default FormSignup

