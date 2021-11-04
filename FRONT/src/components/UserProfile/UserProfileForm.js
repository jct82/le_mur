import react, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'src/components/inputForm/inputs';
//import axios from 'axios';
//import { useParams } from 'react-router-dom';
//import Placeholder from './Placeholder';

/*const INITIAL_STATE = {
  name: 0,
  lastname: "",
};
*/
const userProfileForm = ({ changeToFalse }) => {

  const user = useSelector(state => state.user)
  const handleSubmit = () => {
  }

  const [name, setName ] = useState("");
  const [lastname, setLastname ] = useState("");
  // database call
  /*useEffet(() => {
    const userProfileForm = () => {

    }
  },[])
  /*
  const [user, setUser] = useState(INITIAL_STATE)
  useEffect(() => {
    (async () => {
      try {
        const user = await axios.get(
          // data bidon
          "https://jsonplaceholder.typicode.com/users/1"
        );
        setUser(user.data);
      } catch (error) {
        console.log(error)
      }
    })();
  }, []);

  const handleChange = (e) => {
    console.log(e.target.name, " : ", e.target.value);
    setUser({ ...user, [e.target.name ]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Data for update : ", user);
      const response = await axios.put(/*end point here)
    }catch (error) {
      console.log(error);
    }
  };
*/
return (
  <div className="edit-container">
    
    <form className="form dark" onSubmit={handleSubmit}>
    <h1>Modifier votre profil</h1>
      <Input
        type="text"
        name="name"
        value={user.name}
        changeInput={handleSubmit}
        label="Prénom"
        onChange={event=>setName(event.target.value)}
      />
      <Input
        type="text"
        name="lastname"
        value={user.lastname}
        changeInput={handleSubmit}
        label="Nom"
      />
      <Input
        type="email"
        name="lastname"
        value={user.email}
        changeInput={handleSubmit}
        label="Email"
      />
      <Input 
      type="password"
      name="password"
      value={user.password}
      changeInput={handleSubmit}
      label="Mot de passe"
      />
    </form>
    <button className="btn btn-submit-txt" type="submit" onClick={userProfileForm}>Enregistrer</button>
  </div>
)
};

/*
const userProfileForm = ({ editForm }) => 

{const handleChange = () => {
  const user = useSelector(state => state.user)
};

const handleSubmit = () => {

};
  return (
    <div className="edit-form">
      <form className="form dark" onSubmit={handleSubmit}>
      <div>Prénom: {user.name}</div>
      <div>Nom: {user.lastname}</div>
      <div>Email: {user.email}</div>
      </form>
    </div>
  );
}
*/

/* 
const mapStateToProps = state => ({
  data: state.data
})
*/
userProfileForm.propTypes = {
  userProfileForm: PropTypes.func.isRequired,
};
export default userProfileForm;
