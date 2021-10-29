// custom hooks 
// submit if no errors
import { useState, useEffect } from "react";
import infoValidate from "./infoValidate";

// 
const useForm =(callback, infoValidate) => {
  const [values, setValues] = useState({
    prénom: '',
    nom:'',
    email: '',
    password: '',
    password2: '',
  })
  const [errors, setErrors] = useState({})
  // state
  const [isSubmitting, setIsSubmitting] = useState(false)


  // to update the values 
  // e for event
  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values, 
      // so it can target the name of each input (called name) in FormSignup
      [name]: value
    })
  }
  // to prevent the refresh
  const handleSubmit = e => {
    e.preventDefault();

    // display the values of infoValidate
    setErrors(infoValidate(values));
    setIsSubmitting(true);
  }

  // submit only if no erros 
/*
  useEffect(() => {
    // if errros equal to zero it means there's no erros
    if(Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors])
*/
  return { handleChange, values, handleSubmit, errors };

}

export default useForm;
