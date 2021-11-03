import React from 'react';
import { useState } from 'react';
import FormSignup from './FormSignup';
import './styles.scss';
import './../../assets/icons/cross.png';


const Form = ({closeForm}) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <div className="from-content-left">
        <button onClick={() => closeForm (false)}></button>
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />) : (<FormSuccess />)
        }
      </div>
      </>
      )
}

      export default Form


