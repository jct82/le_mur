import { useSelector, useDispatch } from 'react-redux';
import Input from "../inputForm/inputs";
import Textarea from "../inputForm/textarea";
import FileInput from "../inputForm/file";
import { updateWallInput, postUser, deleteUser } from "src/actions/wall";

import './style.scss';

const ChangeWallForm = () => {
  const dispatch = useDispatch();
  const { title, description, photo, users, currentAdded } = useSelector((state) => state.wall);

  const inputChange = (e) => {
    dispatch(updateWallInput(e.target.value, e.target.name));
  }

  const addUser = () => {
    if (currentAdded.trim().length) dispatch(postUser(currentAdded));
  }

  const suppUser = (e) => {
    dispatch(deleteUser(e.target.previousElementSibling.textContent));
  }

  const fileChange = (e) => {
    dispatch(updateWallInput(e.target.files[0].name, e.target.name));
  }

  const userListJSX = users.map((user) => {
    return(
      <div key={user}>
        <div className="field">
          {user}
        </div>
        <button className="btn supp" type="button" onClick={suppUser}></button>
      </div>
    );
  });

  return (
    <div>
      <h2 className="form-title">Nouveau Document</h2>
      <form className="add-doc-form">
        <Input type="text" label="Nom" name="name" value={title} changeInput={inputChange}/>
        <Textarea name="description" label="Description" value={description} changeInput={inputChange}/>
        <FileInput label="charger une image" value={photo}  name="photo" changeInput={fileChange}/>
        <div className="input-list">
          <div>
            <div className="field">
              <Input type="text" label="Participants" name="currentAdded" value={currentAdded} changeInput={inputChange}/>
            </div>
            <button className="btn add" type="button" onClick={addUser}></button>
          </div>
          {userListJSX}
        </div>
        <input className="btn btn-submit-txt" type="submit" value="Valider"/>
      </form>
    </div>
  )
};
export default ChangeWallForm;
