import { useSelector, useDispatch } from 'react-redux';
import Input from "../inputForm/inputs";
import Textarea from "../inputForm/textarea";
import Select from "../inputForm/select";
import FileInput from "../inputForm/file";
import { updateDocName, updateFileName, postLink, deleteLink } from "src/actions/element";
import { changeDoc } from "src/actions/element";

import './style.scss';

const editDocForm = ({  closePanel }) => {
  const dispatch = useDispatch();
  const elements = useSelector((state) => state.elements);

  const { name, description, type, currentLink, link, src } = elements;
  const imgName = src.substring(src.lastIndexOf('/') + 1);

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
    dispatch(updateFileName(e.target.files[0], e.target.name));
  }

  const selectChange = (e) => {
    dispatch(updateDocName(e.target.value, e.target.name));
  }

  const submitDoc = (e) => {
    e.preventDefault();
    dispatch(changeDoc());
    closePanel();
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
      <form className="add-doc-form" onSubmit={submitDoc} encType="multipart/form-data">
        <Input type="text" label="Nom" name="name" value={name} changeInput={inputChange}/>
        <Textarea name="description" label="Description" value={description} changeInput={inputChange}/>
        <Select  name="type" label="Type de document" value={type} changeInput={selectChange} options={['image', 'texte']} />
        {type == 'image' && <FileInput label="charger une image" value={imgName}  name="src" changeInput={fileChange}/>}
        {type == 'texte' && <Textarea name="src" label="Rédiger un texte" value={src} changeInput={inputChange}/>}
        <div className="input-list">
          <div>
            <div className="field">
              <Input type="text" label="Lien" name="currentLink" value={currentLink} changeInput={inputChange}/>
            </div>
            <button className="btn add" type="button" onClick={addLink}></button>
          </div>
          {linksListJSX}
        </div>
        <input className="btn btn-submit-txt" type="submit"  value="Valider"/>
      </form>
    </div>
  )
};
export default editDocForm;
