import './wallForm.scss';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import closeIcon from 'src/assets/icons/cross-neg-white.png';
// import submit from 'src/assets/icons/submit-neg.png';
import Input from 'src/components/inputForm/inputs';
import PropTypes from 'prop-types';
import Textarea from '../inputForm/textarea';
import Select from '../inputForm/select';
// import FileInput from '../inputForm/file';
import { createWallAction, deleteCoworker, storeWallInputValue } from '../../actions/walls';
import AddedUser from './AddedUser';
import FileInput from '../inputForm/file';
import { getAllUsers } from '../../actions/users';
import SelectUser from '../inputForm/SelectUser';
import randomColor from '../../utils/randomColor';

const WallForm = ({ setFormOpen }) => {
  const dispatch = useDispatch();
  const [picture, setPicture] = useState();

  // récupération de la liste des utilisateurs
  const userName = useSelector((state)=> state.user.loggedUserInfos.name);
  const coworkers = useSelector((state) => state.user.users.map((user) => user.name));
  const coworkersExceptOwner = coworkers.filter((coworker)=> coworker !== userName)

  // récupération du mur en état de création pour afficher les utilisateur au fir et à mesure de leur ajout
  const wallCreation = useSelector((state) => state.walls.wallCreation);
  const { title, description } = wallCreation;

  const handleCloseModal = () => {
    setFormOpen((prevState) => !prevState);
  };
  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    dispatch(storeWallInputValue(name, value));
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const title_color = randomColor();
    console.log(title_color);
    dispatch(createWallAction(picture, title_color));
  };
  const handleChangePicture = (e) => {
    setPicture(e.target.files[0]);
  };
  const handleDeleteCoworker = (user) => {
    dispatch(deleteCoworker(user));
  };
  return (
    <>
      <form className="wallForm dark" type="submit" onSubmit={handleSubmitForm} encType="multipart/form-data">
        <h1 className="wallForm__title">Nouveau mur</h1>
        <div className="wallForm__container">
          <div className="wallForm__leftContainer">
            <img className="wallForm__closeIcon" src={closeIcon} alt="fermeture de la modale" onClick={handleCloseModal} />
            <Input type="text" label="nom du projet" name="title" changeInput={handleChangeInput} value={title} />
            <Textarea label="description" name="description" changeInput={handleChangeInput} value={description} />
            <FileInput type="file" name="photo" changeInput={handleChangePicture} value="" label="upload picture" />
          </div>
          <div className="wallForm__rightContainer">
            { coworkers && <Select name="users" label="nom du collaborateur" value="" options={coworkersExceptOwner} changeInput={handleChangeInput} /> }
            <AddedUser users={wallCreation.users} onDeleteCoworker={handleDeleteCoworker} />
            <button className="btn btn-submit-txt" type="submit">créer le projet</button>
          </div>
        </div>
      </form>
      <div className="greyBackground" />
    </>
  );
};

WallForm.propTypes = {
  setFormOpen: PropTypes.func.isRequired,
};

export default WallForm;
