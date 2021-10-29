import './wallForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import closeIcon from 'src/assets/icons/cross-neg-white.png';
import Input from 'src/components/inputForm/inputs';
import PropTypes from 'prop-types';
import Textarea from '../inputForm/textarea';
import { createWallAction, storeWallInputValue, storeWallPictureAction } from '../../actions/walls';

const WallForm = ({ setFormOpen }) => {
  const dispatch = useDispatch();
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
    e.prevent.default();
    dispatch(createWallAction());
  };
  const handleChangePicture = (e) => {
    dispatch(storeWallPictureAction(e.target.files[0]));
  };
  return (
    <>
      <form className="wallForm dark" type="submit" onClick={handleSubmitForm}>
        <img className="wallForm__closeIcon" src={closeIcon} alt="fermeture de la modale" onClick={handleCloseModal} />
        <Input type="text" label="nom du projet" name="title" changeInput={handleChangeInput} value={title} />
        <Textarea label="description" name="description" changeInput={handleChangeInput} value={description} />
        <Input type="file" name="photo" changeInput={handleChangePicture} />
        <button className="wallForm__submitBtn" type="submit">créer le projet</button>
      </form>
      <div className="greyBackground" />
    </>
  );
};

WallForm.propTypes = {
  setFormOpen: PropTypes.func.isRequired,
};

export default WallForm;
