import { useSelector, useDispatch } from 'react-redux';

import Input from "../inputForm/inputs";
import Textarea from "../inputForm/textarea";
import { updateDocName, postLink } from "src/actions/wall";

import './style.scss';

const Wall = () => {
  const dispatch = useDispatch();
  const nameVal = useSelector((state) => state.elements.name);
  const descVal = useSelector((state) => state.elements.description);
  const typeVal = useSelector((state) => state.elements.type);
  const linkVal = useSelector((state) => state.elements.currentLink);
  const linkGroup = useSelector((state) => state.elements.link);

  const slidePanel = () => {
    document.querySelector('.main').classList.add('on');
  }

  const closePanel = () => {
    document.querySelector('.main').classList.remove('on');
  }

  const inputChange = (e) => {
    dispatch(updateDocName(e.target.value, e.target.name));
  }

  const addLink = () => {
    dispatch(postLink(linkVal));
  }

  const suppLink = (e) => {
    console.log(e.target.previousElementSibling.textContent);
  }

  
  const linksListJSX = linkGroup.map((link) => {
    return(
      <div key={link}>
        <div className="field">
          {link}
        </div>
        <button className="btn" type="button" onClick={suppLink}>x</button>
      </div>
    );
  });

  


  return (
    <div className="wall">
      <div className="sub-header">
        <h1>page Projet</h1>
      </div>
      <div className="main">
        <div className="dashboard">
          <div className="close-panel" onClick={closePanel}>{`<<`}</div>
          <h2 className="form-title">Nouveau Document</h2>
          <form>
            <Input type="text" label="Nom" name="name" value={nameVal} changeInput={inputChange}/>
            <Textarea name="description" label="Description" value={descVal} changeInput={inputChange}/>
            {/* <select onChange={inputChange} name="type">
              <option value="image">Image</option>
              <option value="texte">Texte</option>
            </select> */}
            <div className="input-list">
              <div>
                <div className="field">
                  <Input type="text" label="Lien" name="currentLink" value={linkVal} changeInput={inputChange}/>
                </div>
                <button className="btn" type="button" onClick={addLink}>+</button>
              </div>
              {linksListJSX}
            </div>
          </form>
        </div>
        <div className="menu-bar">
          <div className="icon info" onClick={slidePanel}> I </div>
          <div className="icon info"> + </div>
        </div>
        <div className="board-wrapper">
          <div className="board">

          </div>
        </div>
      </div>
     

      {/* <form>
        vdfvdfvdfv
        <Input type="text"/>
        <Textarea />
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <input className="btn btn-submit-txt" type="submit" value="Valider"/>
        <input className="btn btn-submit" type="submit" value=""/>
        <button className="btn btn-change" type="button" >Modifier</button>
        <button className="btn btn-see" type="button" >Voir</button>
        <button className="btn btn-info" type="button" >info</button>
        <button className="btn btn-add" type="button" >Ajouter</button>
        <button className="btn btn-delete" type="button" >Supprimer</button>
        <button className="btn btn-delete-txt" type="button" >Supprimer</button>
      </form>
      
      <form className="dark">
        vdfvdfvdfv
        <Input type="text"/>
      </form> */}
    </div>
  )
};
export default Wall;
