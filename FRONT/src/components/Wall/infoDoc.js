import { useSelector, useDispatch } from 'react-redux';
import { changePanel } from 'src/actions/wall.js'

import './style.scss';

const infoDocForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.id);
  const {  name, description, type, src, link, ownerid } = useSelector((state) => state.elements);

  const changeForm= () => {
    const fadeElem = document.querySelector('.fade-elem')
    fadeElem.classList.add('on');
    setTimeout(() => {
      dispatch(changePanel('addDocPanel'));
    }, 500);
    setTimeout(() => {
      fadeElem.classList.remove('on');
    }, 1000);
  }

  return (
    <div className="form-info">
      <h2 className="form-title">Info Document</h2>
      <div className="info-block">
        <label>Nom :</label>
        <p>{name}</p>
      </div>
      <div className="info-block">
        <label>Description :</label>
        <p>{description}</p>
      </div>
      <div className="info-block">
        <label>Document :</label><span>{type}</span>
        {type == 'image' ? <img src={src} /> : <p>{src}</p>}
      </div>
      <div className="info-block">
        <label>Liens :</label>
        <ul className="link-list">
          {link.map((item) => (<li key={item}><a href={item} target="_blank" className="block">{item}</a></li>))}
        </ul>
      </div>
      {ownerid == user && 
        <div className="user-btn-block">
          <button className="btn btn-change-txt" type="button" onClick={changeForm}>Modifier</button>
          <button className="btn btn-supp-txt" type="button">Supprimer</button>
        </div>
      }
    </div>
  )
};
export default infoDocForm;
