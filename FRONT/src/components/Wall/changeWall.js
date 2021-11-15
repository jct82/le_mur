import { useSelector, useDispatch } from 'react-redux';
import Input from "../inputForm/inputs";
import ListInput from "../inputForm/listInput";
import Textarea from "../inputForm/textarea";
import FileInput from "../inputForm/file";
import { updateWallInput, tryUser, deleteUser, changeWall } from "src/actions/wall";

import './style.scss';

const ChangeWallForm = ({closePanel}) => {
  const dispatch = useDispatch();
  const { title, description, photo, users, currentAdded } = useSelector((state) => state.wall);
  const imgName = photo.substring(photo.lastIndexOf('/') + 1);

  const inputChange = (e) => {
    dispatch(updateWallInput(e.target.value, e.target.name));
  }

  const addUser = () => {
    if (currentAdded.trim().length) dispatch(tryUser(currentAdded));
  }

  const changeUser = (e) => {
    console.log('changeUser', e.value);
    dispatch(updateWallInput(e.target.value, e.target.name));
  }
  //checkUrl(e.target.previousElementSibling.firstChild.firstChild)


  const suppUser = (e) => {
    dispatch(deleteUser(e.target.previousElementSibling.textContent));
  }

  const fileChange = (e) => {
    dispatch(updateWallInput(e.target.files[0], e.target.name));
  }

  const submitDoc = (e) => {
    e.preventDefault();
    dispatch(changeWall());
    closePanel();
  }

  const userListJSX = users.map((user) => {
    return(
      <div key={user.id}>
        <div className="field">
          {user.name} {user.lastname}
        </div>
        <button className="btn supp" type="button" onClick={suppUser}></button>
      </div>
    );
  });

  return (
    <div>
      <h2 className="form-title">Modifier le mur</h2>
      <form className="add-doc-form" onSubmit={submitDoc} encType="multipart/form-data">
        <Input type="text" label="Nom" name="title" value={title} changeInput={inputChange}/>
        <Textarea name="description" label="Description" value={description} changeInput={inputChange}/>
        <FileInput label="charger une image" value={imgName} name="photo" changeInput={fileChange}/>
        <div className="input-list">
          <ListInput type="text" label="Participants" name="currentAdded" value={currentAdded} changeInput={changeUser} action={addUser}/>
          {userListJSX}
        </div>
        <input className="btn btn-submit-txt" type="submit" value="Valider"/>
      </form>
    </div>
  )
};
export default ChangeWallForm;
