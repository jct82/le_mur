import { useSelector, useDispatch } from 'react-redux';
import Input from "../inputForm/inputs";
import Textarea from "../inputForm/textarea";
import Select from "../inputForm/select";
import FileInput from "../inputForm/file";
import { updateDocName, postLink, deleteLink } from "src/actions/element";

import './style.scss';

const addDocForm = () => {
  const dispatch = useDispatch();
  const { name, description, type, currentLink, link, urlSrc } = useSelector((state) => state.elements);

  const inputChange = (e) => {
    dispatch(updateDocName(e.target.value, e.target.name));
  }

  const addLink = () => {
    if (currentLink.trim().length) dispatch(postLink(currentLink));
  }

  const suppLink = (e) => {
    dispatch(deleteLink(e.target.previousElementSibling.textContent));
  }

  const fileChange = (e) => {
    console.log(e.target);
    console.log(e.target.files);
    dispatch(updateDocName(e.target.files[0].name, e.target.name));
  }

  const selectChange = (e) => {
    dispatch(updateDocName('', 'doc'));
    dispatch(updateDocName(e.target.value, e.target.name));
  }

  const linksListJSX = link.map((lien) => {
    return(
      <div key={lien}>
        <div className="field">
          {lien}
        </div>
        <button className="btn supp" type="button" onClick={suppLink}></button>
      </div>
    );
  });

  return (
    <div>
      <h2 className="form-title">Nouveau Document</h2>
      <form className="add-doc-form">
        <Input type="text" label="Nom" name="name" value={name} changeInput={inputChange}/>
        <Textarea name="description" label="Description" value={description} changeInput={inputChange}/>
        <Select  name="type" label="Type de document" value={type} changeInput={selectChange} options={['image', 'texte']} />
        {type == 'image' && <FileInput label="charger une image" value={urlSrc}  name="urlSrc" changeInput={fileChange}/>}
        {type == 'texte' && <Textarea name="urlSrc" label="Rédiger un texte" value={urlSrc} changeInput={inputChange}/>}
        <div className="input-list">
          <div>
            <div className="field">
              <Input type="text" label="Lien" name="currentLink" value={currentLink} changeInput={inputChange}/>
            </div>
            <button className="btn add" type="button" onClick={addLink}></button>
          </div>
          {linksListJSX}
        </div>
        <input className="btn btn-submit-txt" type="submit" value="Valider"/>
      </form>
    </div>
  )
};
export default addDocForm;
