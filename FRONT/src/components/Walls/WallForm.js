import './wallForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import Input from 'src/components/inputForm/inputs';
import Textarea from '../inputForm/textarea';
import { createWallAction, storeWallInputValue, storeWallPictureAction } from '../../actions/walls';

const WallForm = () => {
  const dispatch = useDispatch();
  const pictureuploaded = useSelector((state) => state.walls.wallCreation);
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
        <Input type="text" label="nom du projet" name="title" changeInput={handleChangeInput} />
        <Textarea label="description" name="description" changeInput={handleChangeInput} />
        <Input type="file" name="photo" changeInput={handleChangePicture} />
        <button className="wallForm__submitBtn" type="submit">créer le projet</button>
      </form>
      <div className="greyBackground" />
    </>
  );
};

export default WallForm;
