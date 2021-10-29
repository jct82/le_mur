import { useState } from "react";
import React from "react";
import Form from "./Form";
import './styles.scss';


const Button = () => {
  // false by default
  const [openForm, setOpenForm] = useState(false)
  return (
    <div className="form-button">
      <button className="openFormBtn" onClick={() => {
        setOpenForm(true)
      }}>INSCRIPTION</button>
      {openForm && <Form closeForm={setOpenForm} />}
    </div>
  )
}


export default Button
