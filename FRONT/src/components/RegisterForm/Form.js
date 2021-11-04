import React from 'react';
import { useState } from 'react';
import FormSignup from './FormSignup';
import './styles.scss';
import closeIcon from 'src/assets/icons/cross-neg-white.png';


const Form = ({ closeForm }) => {

  const handleCloseModal = () => {
    closeForm((prevState) => !prevState);
  };

  const [isSubmitted, setIsSubmitted] = useState(false)
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <div className="from-content-left">
          <img className="closeIcon" src={closeIcon} alt="fermeture de la modale" onClick={handleCloseModal} />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />) : (<FormSuccess />)
        }
      </div>
    </>
  )
}

export default Form


